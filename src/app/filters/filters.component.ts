import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {SimpleGlobal} from 'ng2-simple-global';
import * as _ from 'lodash';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import {SharedData} from './../services/shared-service';

declare const $: any;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  prodmodel=[];
  productFilteredList=[];
  cat;
  state : string ;
  modal={};
  filters = {}
  animals: any;
  filteredAnimals: any;
  category=[];
  // filter input bind
  catfilter :string;
  auctionfilter :string;
  statefilter :string;
  minprice;
  maxprice;
  constructor(public _shareData : SharedData,private db: AngularFireDatabase,private sg: SimpleGlobal,private route: ActivatedRoute,private _nav:Router,) { 
    // this.prodmodel = this.front.models ;
    // this.applyFilters()

    this._shareData.returnSubject().subscribe(
      data => {
        this.prodmodel = data
      console.log("shared",data) ;
    })


    
    this.db.list('/products', { preserveSnapshot: true })
    .subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.category.push(snapshot.key);

      });

      console.log("cat key", this.category);

    })
}


  private applyFilters() {
    this.filteredAnimals = _.filter(this.prodmodel, _.conforms(this.filters) )
    console.log(this.filteredAnimals) 
  }

  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
    console.log(property,rule)
  }

  /// filter  numbers greater than rule
  filterGreaterThan(property: string, rule: number) {
    this.filters[property] = val => val > rule
    this.applyFilters()
  }
  filterLessThan(property: string, rule: number) {
    this.filters[property] = val => val < rule
    this.applyFilters()
  }

  /// filter properties that resolve to true
  filterBoolean(property: string, rule: boolean) {
    if (!rule) this.removeFilter(property)
    else {
      this.filters[property] = val => val
      this.applyFilters()
    }
  }

  /// removes filter
  removeFilter(property: string) {
    console.log(property)
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }
  ngOnInit() {
  //   this.route.queryParams
  //   .subscribe(params  => {
  //     this.cat = params.cat;
  //     this.state = params.state
  //     console.log(params);
  //   })
  //   if(this.cat != ""){
  //   this.productFilteredList=[];
  //   this.prodmodel.filter((product: any) => {
  //     console.log(product['category'])

  //     if(product['category'] ){

  //       if(product['category'].toLowerCase().indexOf(this.cat.toLowerCase()) > -1){
  //         this.productFilteredList.push(product);
  //       }
  //     }
  //   });
  //   console.log(this.productFilteredList);
  // }
  // else{
  //   this.productFilteredList = [];
  // }

  // let val = $('#myRange').value();
  // alert('val');

}
singleproduct(acess,catname,auction,state,pid,uid){
  console.log(acess,catname,auction,state,pid,uid);
  this.sg['category'] = catname;
  this.sg['AuctionType'] = auction;
  this.sg['state'] = state;
  this.sg['pid'] = pid;
  this.sg['uid'] = uid;
  console.log("parent auction   ", this.sg['AuctionType'])
    //  localStorage.setItem("singleproduct",JSON.stringify(acess));
     let url = 'item/'+pid+'/'+acess.title;
     url=url.replace(/&/g,'and').replace(/\s+/g, '-').toLowerCase();
     this._nav.navigate([url]);
  
    }


}
