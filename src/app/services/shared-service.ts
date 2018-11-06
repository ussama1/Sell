import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedData {

  vendorSubject = new BehaviorSubject<any>('');
  notiSubject = new BehaviorSubject<any>('');
  searchSubject = new BehaviorSubject<any>('');
  
  returnSubject(){
    return this.vendorSubject;
  }
  
  vendorInfo(data){
    this.vendorSubject.next(data);
  }
  returnNoti(){
return this.notiSubject;
  }
  notiInfo(path){
  this.notiSubject.next(path)

  }

  returnSearch(){
    return this.searchSubject;
      }
  searchInfo(data){
      this.searchSubject.next(data)
    
  }

}