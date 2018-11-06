import * as ts from 'typescript';

import { findAstNodes, getFirstNode } from './ast_helpers';
import { AddNodeOperation, TransformOperation } from './make_transform';


export function insertImport(
  sourceFile: ts.SourceFile,
  symbolName: string,
  modulePath: string
): TransformOperation[] {
  const ops: TransformOperation[] = [];
  // Find all imports.
  const allImports = findAstNodes(null, sourceFile, ts.SyntaxKind.ImportDeclaration);
  const maybeImports = allImports
    .filter((node: ts.ImportDeclaration) => {
      // Filter all imports that do not match the modulePath.
      return node.moduleSpecifier.kind == ts.SyntaxKind.StringLiteral
        && (node.moduleSpecifier as ts.StringLiteral).text == modulePath;
    })
    .filter((node: ts.ImportDeclaration) => {
      // Filter out import statements that are either `import 'XYZ'` or `import * as X from 'XYZ'`.
      const clause = node.importClause as ts.ImportClause;
      if (!clause || clause.name || !clause.namedBindings) {
        return false;
      }
      return clause.namedBindings.kind == ts.SyntaxKind.NamedImports;
    })
    .map((node: ts.ImportDeclaration) => {
      // Return the `{ ... }` list of the named import.
      return (node.importClause as ts.ImportClause).namedBindings as ts.NamedImports;
    });

  if (maybeImports.length) {
    // There's an `import {A, B, C} from 'modulePath'`.
    // Find if it's in either imports. If so, just return; nothing to do.
    const hasImportAlready = maybeImports.some((node: ts.NamedImports) => {
      return node.elements.some((element: ts.ImportSpecifier) => {
        return element.name.text == symbolName;
      });
    });
    if (hasImportAlready) {
      return;
    }

    // Just pick the first one and insert at the end of its identifier list.
    ops.push(new AddNodeOperation(
      sourceFile,
      maybeImports[0].elements[maybeImports[0].elements.length - 1],
      undefined,
      ts.createImportSpecifier(undefined, ts.createIdentifier(symbolName))
    ));
  } else {
    // Create the new import node.
    const namedImports = ts.createNamedImports([ts.createImportSpecifier(undefined,
      ts.createIdentifier(symbolName))]);
    const importClause = ts.createImportClause(undefined, namedImports);
    const newImport = ts.createImportDeclaration(undefined, undefined, importClause,
      ts.createLiteral(modulePath));

    if (allImports.length > 0) {
      // Find the last import and insert after.
      ops.push(new AddNodeOperation(
        sourceFile,
        allImports[allImports.length - 1],
        undefined,
        newImport
      ));
    } else {
      // Insert before the first node.
      ops.push(new AddNodeOperation(
        sourceFile,
        getFirstNode(sourceFile),
        newImport
      ));
    }
  }
  return ops;
}
