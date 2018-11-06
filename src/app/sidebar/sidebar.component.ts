import { Component, OnInit } from '@angular/core';
import { ProductService  } from './../product.service';
import { Router, RouterModule } from '@angular/router';
import { PipeTransform, Injectable, Pipe }     from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import {NgForm, FormBuilder,FormsModule, FormGroup, Validators, FormControl,ReactiveFormsModule   } from "@angular/forms";
import * as _ from 'lodash';
import {SharedData} from './../services/shared-service';

@Pipe({
  name: 'replace'
})

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})

export class SidebarComponent implements OnInit {
  cat = [];
  auctionType=[];
  prodkey=[];
  prodmodel=[];
  uid=[];
  loaded:boolean;
  product;
  showspinner:string = '';
  model:any={};
 category;
 
  constructor(private db: AngularFireDatabase,public _shareData : SharedData,private _cat: ProductService,private _nav:Router) { 
   
  }
  
 mainFunction(){
 // this.cat = this.front.category ;
//  this._shareData.returnSubject().subscribe(
//   data => {
// this.cat = data
// })
// this.auctionType = this.front.auction ;
// this.prodkey = this.front.catidmodel ;
// this.prodmodel = this.front.models ;
// this.uid = this.front.userid;
// console.log("sidebar",this.prodmodel)
this.db.list('/categories', { preserveSnapshot: true })
.subscribe(snapshots => {
  this.cat=[];
  snapshots.forEach(snapshot => {
    this.cat.push(snapshot.key);

  });


})

 }
 


  ngOnInit() {
    this.mainFunction();
    this.loaded=true;
    
  }

loadprodut(item)
{
  localStorage.setItem("item1",item)  
  this.product=item;
  this._shareData.vendorInfo(item);     
console.log("category: ",item);
let sth = 'products/category/'+item;
sth=sth.replace(/&/g,'and').replace(/\s+/g, '-').toLowerCase();
console.log("sth: ",sth);
this._nav.navigate([sth]);
} 



}
