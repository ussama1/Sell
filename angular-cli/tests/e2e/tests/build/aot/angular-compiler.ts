import { ng, npm } from '../../../utils/process';
import { updateJsonFile } from '../../../utils/project';
import { expectFileToMatch, rimraf, moveFile } from '../../../utils/fs';
import { getGlobalVariable } from '../../../utils/env';


// THIS TEST REQUIRES TO MOVE NODE_MODULES AND MOVE IT BACK.
export default function () {
  // Skip this in ejected tests.
  // Something goes wrong when installing node modules after eject. Remove this in ng5.
  if (getGlobalVariable('argv').eject) {
    return Promise.resolve();
  }

  return Promise.resolve()
    .then(() => moveFile('node_modules', '../node_modules'))
    .then(() => updateJsonFile('package.json', packageJson => {
      const dependencies = packageJson['dependencies'];
      dependencies['@angular/animations'] = '5.0.0-beta.6';
      dependencies['@angular/common'] = '5.0.0-beta.6';
      dependencies['@angular/compiler'] = '5.0.0-beta.6';
      dependencies['@angular/core'] = '5.0.0-beta.6';
      dependencies['@angular/forms'] = '5.0.0-beta.6';
      dependencies['@angular/http'] = '5.0.0-beta.6';
      dependencies['@angular/platform-browser'] = '5.0.0-beta.6';
      dependencies['@angular/platform-browser-dynamic'] = '5.0.0-beta.6';
      dependencies['@angular/router'] = '5.0.0-beta.6';
      const devDependencies = packageJson['devDependencies'];
      devDependencies['@angular/compiler-cli'] = '5.0.0-beta.6';
      devDependencies['@angular/language-service'] = '5.0.0-beta.6';
      devDependencies['typescript'] = '2.4.2';
    }))
    .then(() => npm('install'))
    .then(() => ng('build', '--aot'))
    .then(() => expectFileToMatch('dist/main.bundle.js',
      /bootstrapModuleFactory.*\/\* AppModuleNgFactory \*\//))
    // Cleanup
    .then(() => {
      return rimraf('node_modules')
        .then(() => moveFile('../node_modules', 'node_modules'));
    }, (err: any) => {
      return rimraf('node_modules')
        .then(() => moveFile('../node_modules', 'node_modules'))
        .then(() => { throw err; });
    });
}
