import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {SidebarComponent} from "../../sidebar/sidebar.component";
import {PreloaderService} from "../../services/preloader-service";
import {BaseRequestOptions, RequestOptions, XHRBackend} from "@angular/http";
import {HttpService} from "../../services/http-service";
import {LoadingSpinnerComponent} from "./loading-spinner.component";
export function httpServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions, preloaderService: PreloaderService) {
  return new HttpService(backend, defaultOptions, preloaderService);
}

@NgModule({
  imports: [
    CommonModule,
   ],
  declarations: [
    SidebarComponent,
    LoadingSpinnerComponent,
   ],
  providers: [
  PreloaderService,
  BaseRequestOptions,
  {
    provide: HttpService,
    useFactory: httpServiceFactory,
    deps: [XHRBackend, RequestOptions, PreloaderService]
  }
    ],
  exports:[
    SidebarComponent,
    LoadingSpinnerComponent
  ]
})
export class ExportedComponentsModule{

}
