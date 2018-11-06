import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './../search-product/search.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import {SimpleGlobal} from 'ng2-simple-global';
import {SharedData} from './../services/shared-service';
@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  search;
  models: any = [];
  end;
  showSpinner: boolean = true;
  productLoad: boolean = false;
  
  constructor(public _shareData : SharedData,private sg: SimpleGlobal,private _nav:Router,private route: ActivatedRoute, private _serv: SearchService, private db: AngularFireDatabase) { }
  loadsearch(sid) {
    console.log("end", this.end)
    if (this.end == undefined) {
      this.db.list('result/' + sid + '/', {
        query: {
          limitToLast: 15,
          orderByChild: 'chargeTime'
        }

      }).subscribe(items => {
       
        this.showSpinner = false
        
       
        this.end = items[0]['chargeTime']        
        this.models = items.reverse()
        console.log("model",this.models,items)
        
        console.log("pid", this.end)
        
      })
    }
    else {
      this.db.list('result/' + sid + '/', {
        query: {
          limitToLast: 10,
          orderByChild: 'chargeTime',
          endAt: this.end
        }

      }).subscribe(items => {
        
        this.end = items[0]['chargeTime']        
        items = items.reverse()
        let i = 0
        items.forEach(element => {

          i++;

          if (i != 1 ) {
            this.models.push(element)
          }
        })
        
        console.log(this.models)
      })
    }
  }
  onScroll() {
    this.loadsearch(this.search)
  }
  single(title,category,auction,state,pid,uid){
    console.log(auction,state,pid,uid)
    this.sg['category'] = category;
    this.sg['AuctionType'] = auction;
    this.sg['state'] = state;
    this.sg['pid'] = pid;
    this.sg['uid'] = uid;
    console.log("global",this.sg['category'],this.sg['AuctionType'], this.sg['state'],this.sg['pid'],this.sg['uid'])
    // localStorage.setItem("singleproduct",JSON.stringify(acess));
    let urlTitle;
    let mainTitle;
    urlTitle = title.replace(/[^A-Za-z ]/g, "");
    mainTitle = urlTitle.replace(/\s+/g, '-').toLowerCase();
    let url = 'item/'+mainTitle;
  this._nav.navigate([url], {queryParams: { cat:category,auction:auction,state:state,pid:pid,uid:uid}});
    }
  ngOnInit() {
    
    

    this._shareData.returnSearch().subscribe( data => {
      this.showSpinner = true;
      window.scrollTo(0, 0);
      
      this.models = [];
      this.end = undefined ;
      this.search = data;
          if( !data ){
            this.route.params.subscribe(params => {
            console.log('params', params['id'])
            this.search = params['id'];

            
             })
          }

     
        this._serv.search_service(this.search).subscribe(data => {          
          console.log(data);
          this.loadsearch(this.search)
        }, error => {
          console.log(error);
          this.loadsearch(this.search)
        })


}) 
    

      
   
  

  }
}
