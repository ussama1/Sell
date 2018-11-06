import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from "@angular/forms";
import { SellService } from './sell.service'
import { Menu } from './menu';
import { Job } from './job';
import * as _ from "lodash";
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';

import 'firebase/storage'
import * as firebase from 'firebase';
import swal from 'sweetalert2';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  showHide: boolean;
  showProCat = true;
  showJobCat = false;
  showProPrice = true;
  showJobPrice = false;
  showProComplete = true;
  showJobComplete = false;
  showBuynow: boolean;
  hideShowList: boolean;
  addReverse: boolean;
  btnChecked: boolean;
  itemsSubscription;
  cat: any = [];
  model: any = {};
  location_Data = { "zip_code": "","lat": "", "lng": "", "city": "", "state": "" };
  upfile = {};
  benefit;
  jobimg: string;
  selectedFiles: FileList;
  currentUpload: Menu;
  invoiceForm: FormGroup;
  step1 = false;
  
//////////PRoduct////////////
post = new Menu();
counter = 0 ;
catpath;
state;
currentTime;
type;
product_price;
imgarr = [];
showSpinne : boolean =false;

////////////////End/////////


  /////////////job///////////////
  jobcat;
  jobtype;
  jobstate;
  currentUser
  upload = new Job();
  token;

  ////////////end///////////////




  @ViewChild('fileImportInput')
  fileImportInput: any;



  changeShowStatus() {

    console.log("junaid");
    console.log("product", this.showProCat, "job", this.showJobCat)



    this.showHide = !this.showHide;
    if (this.showProCat === true && this.showJobCat === false) {
      this.showJobCat = true;
      this.showProCat = false;
      // alert("junaid1");
    } else if (this.showProCat === false && this.showJobCat === true) {
      this.showJobCat = false;
      this.showProCat = true;
    }


    if (this.showProPrice === true && this.showJobPrice === false) {
      this.showJobPrice = true;
      this.showProPrice = false;
    } else if (this.showProPrice === false && this.showJobPrice === true) {
      this.showJobPrice = false;
      this.showProPrice = true;
    }

    if (this.showProComplete === true && this.showJobComplete === false) {
      this.showJobComplete = true;
      this.showProComplete = false;
    } else if (this.showProComplete === false && this.showJobComplete === true) {
      this.showJobComplete = false;
      this.showProComplete = true;
    }
  }

  nextStep1() {

    this.step1 = true;
    //alert(this.showJobCat);
    //alert(this.showProCat);
    // this.showProCat = true;
    // this.showJobCat = true;
  }

  nextStep2() {
    //alert(this.showJobPrice);
    //alert(this.showProPrice);
  }

  nextStep3() {
    //alert(this.showJobComplete);
    //alert(this.showProComplete);
  }

  buynow() {
    this.showBuynow = !this.showBuynow;
  }

  hideList() {
    this.hideShowList = !this.hideShowList;
  }

  reversePrice() {
    this.addReverse = !this.addReverse;
  }

  checkedBtn() {
    this.btnChecked = !this.btnChecked;
  }

  constructor(private _nav: Router, public authService: AuthService, private afAuth: AngularFireAuth, private _serv: SellService, private db: AngularFireDatabase) {

    localStorage.getItem('JwtToken');
    //  this.token = this.authService.gettestToken();
     console.log(this.authService.gettestToken())
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.currentUser = res.uid
        this.token =  res.refreshToken;
        
      }
    })







    this.showHide = true;
    this.showBuynow = true;
    this.hideShowList = false;
    this.addReverse = true;
    this.btnChecked = false;
    this.itemsSubscription = this.db.list('/categories/', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.cat.push(snapshot.key)


      })
      this.itemsSubscription.unsubscribe();
    })
  }
  zipcodeCheck(zip) {
    console.log(zip);
    this._serv.zipcode(zip).subscribe(
      data => {
        this.location_Data = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }


  onSubmit(obj: NgForm) {
    if (obj.value.offer == true) {
      obj.value.offer == 'yes';
    } else {
      obj.value.offer == 'no';
    }
    console.log(obj.value.offer, "junaid", obj.value)
    this.uploadSingle(obj.value);
  }



  ngOnInit() {
    window.scrollTo(0,0);
      this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.currentUser = res.uid
        this.token =  res.refreshToken;
      console.log("token",this.token)
      }
    })
    console.log("Token", localStorage.getItem('JwtToken'))
    this.loadScript('assets/script/scripts.js');
    this.loadScript('assets/script/file-view.js');
    this.model.buy = 'buy-it-now';
    this.model.jobtype = 'buy-it-now';
    this.model.jobcat = 'Jobs';
    this.model.reserve = 'reserve';

  }

  public loadScript(url) {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }



  // selectFile(event) {
  //   const file = event.target.files.item(0)
  //   if (file.type.match('image.*')) {
  //     this.selectedFiles = event.target.files;
  //   } else {
  //     alert('invalid format!');
  //   }
  // }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles)
  }
  uploadSingle(obj) {
    this.showSpinne == true;
    if (obj.jobcat == "Jobs") {
      this.jobimg = "https://firebasestorage.googleapis.com/v0/b/sell4bids-4affe.appspot.com/o/appImages%2Fjob%2Fjobs_new_1200.png?alt=media&token=4cec5834-2f6a-4416-a653-47117ad90301"
      console.log(this.jobimg, obj, 1)
      this.jobupload(obj)
      // this._serv.jobupload(obj,1)
    }
    else {
      let progress ;
      let arr = [];
      console.log("DATA", this.currentUpload, obj)

      // let file = this.selectedFiles.item(0)
      // this.currentUpload = new Menu(file);
      // this._serv.pushUpload(this.currentUpload,obj)

      
      let files = this.selectedFiles
      console.log("length", files);
      let filesIndex = _.range(files.length)
      _.each(filesIndex, (idx) => {
      //   this.currentUpload = new Menu(files[idx]);
      //   console.log(this.currentUpload)

      //   this._serv.pushUpload(this.currentUpload,obj,files.length)

      // })
      
 let storageRef = firebase.storage().ref();
        let uploadTask = storageRef.child(`/uploads/${files[idx].name}`).put(files[idx]);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
             progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
             console.log(progress,"url", uploadTask.snapshot.downloadURL);   
            
           


          },

          (error) => {
            // upload failed
            console.log(error)
          },
          () => {
            
            this.imgarr.push(
              uploadTask.snapshot.downloadURL
            )         
          console.log("array",this.imgarr)
          if(files.length == this.imgarr.length){
            
            this.uploadPost(this.imgarr,obj)
          }
            
        })

      })
            
    }


    //   this.upfile = this.selectedFiles
    //     console.log(this.upfile)
    //     this._serv.pushUpload(this.upfile,obj)

  }

uploadPost(imgPath,obj){
  
  this.currentTime = firebase.database.ServerValue.TIMESTAMP;
  if(obj.category){            
  this.catpath = obj.category;
  }
            
  if(obj.buy){
    this.type = obj.buy            
  }
  if(obj.reserve && obj.revercePrice){
    this.type = obj.reserve            
  }
  else if(obj.reserve  && !obj.revercePrice){
    this.type =  "non-reserve"
  }
  
  this.state = obj.state;
  if(obj.offer == true){
  this.post.acceptOffers="yes"
  }
  if(obj.offer == false){
    this.post.acceptOffers="no"
  }
  if(obj.list == true){
    this.post.endTime= -1 ;
    }
  if(obj.listingTime){
    this.post.endTime = new Date().getTime()+parseInt(obj.listingTime,10) ;
    }
  if(obj.listingReverse){
    this.post.endTime = new Date().getTime()+parseInt(obj.listingReverse,10) ;
    }  
  if(obj.revercePrice){    
    this.post.rPrice = obj.revercePrice.toString()
    }
  if(obj.rsPrice){
    this.post.startPrice = obj.rsPrice.toString();
      this.product_price = obj.rsPrice
      
    }
  if(obj.quantity){            
    this.post.quantity= obj.quantity.toString();
      }
      
  if(obj.price){
    this.post.startPrice = obj.price.toString();            
      }
  
   this.post.city=obj.city.toString();
  if(obj.condition){            
    this.post.condition=obj.condition.toString();
  }
  if(obj.description){            
    this.post.description=obj.description.toString();
  }
  
    if ( imgPath[0] != undefined ){
      this.post.image0 = imgPath[0];
    }
    if ( imgPath[1] != undefined ){
      this.post.image1 = imgPath[1];
    }
    if ( imgPath[2] != undefined ){
      this.post.image2 = imgPath[2];
    }
    if ( imgPath[3] != undefined ){
      this.post.image3 = imgPath[3];
    }
    if ( imgPath[4] != undefined ){
      this.post.image4 = imgPath[4];
    }
  
  // this.post.image0 = uploadTask.snapshot.downloadURL.toString();
  this.post.imagesCount = imgPath.length.toString();
  this.post.state = obj.state.toString(); 
  if(obj.lat){ 
  this.post.latitude = obj.lat.toString();
  }
  if(obj.zipcode){
    this.post.zipcode= obj.zipcode.toString();
  }
  if(obj.lng){    
  this.post.longitude = obj.lng.toString();
  }
  if(obj.title){            
    this.post.title = obj.title.toString();
  }
  this.post.token = this.token          
  this.post.startTime = new Date().getTime();
  this.post.chargeTime = new Date().getTime();          
  this.post.uid = this.currentUser;
  this.saveFileData(this.post)
}


private saveFileData(upload: Menu) {
  console.log("proudct upload",upload)
 let key =  this.db.list('products/'+this.catpath+'/'+this.type+'/'+this.state).push(upload).key;    
 console.log("key................",key);  
 if(key && (this.type == 'reserve' || this.type == 'non-reserve' )) {
  this.db.object('products/'+this.catpath+'/'+this.type+'/'+this.state+'/'+key+'/bids').set({
    maxBid : "0",
    startPrice : this.product_price.toString()
  })
 }  
 if(key){
  this.db.object('users/'+this.currentUser+'/products/selling/'+key).set({
    auctionType : this.type,
    category : this.catpath,
    state : this.state

  }).then( (sucess) =>{
    this.showSpinne == false;    
  swal(
    'Congrats.',
    'Your item has been listed successfully on Sell4Bids.\n Good luck.',
    'success'
  ) 
}).catch( error => {
  this.showSpinne == false;    
  swal(
    'Oops...',
    'Failed to Upload Data. Inccorrect Information!',
    'error'
)
})
  let url = '/';
  this._nav.navigate([url]);
 }
  
}









  
  jobupload(obj) {
    console.log(obj)
    // this.currentTime = firebase.database.ServerValue.TIMESTAMP;
    if (obj.usstate) {
    this.jobstate = obj.usstate.toString();
    }
    if (obj.jobcat) {
      this.jobcat = obj.jobcat.toString()
    }
    if (obj.jobtype) {
      this.jobtype = obj.jobtype.toString()
    }
    if (obj.employment) {
      this.upload.employmentType = obj.employment.toString()
    }
    if (obj.jobcategory) {
      this.upload.jobCategory = obj.jobcategory.toString()
    }
    if (obj.payperiod) {
      this.upload.payPeriod = obj.payperiod.toString()
    }
    if (obj.salary) {
      this.upload.startPrice = obj.salary.toString()
    }
    if (obj.toughness) {
      this.upload.condition = obj.toughness.toString()
    }
    if (obj.jobdescription) {
      this.upload.description = obj.jobdescription.toString()
    }
    if (obj.jobtitle) {
      this.upload.title = obj.jobtitle.toString()
    }
    if (obj.joboffer == true) {
      this.upload.acceptOffers = "yes"
    }
    if (obj.joboffer == false) {
      this.upload.acceptOffers = "no"
    }
    if (obj.medical == true) {
      this.upload.benefits = "Medical"
    }
    if (obj.pto == true) {
      this.upload.benefits += ",PTO"
    }
    if (obj.k == true) {
      this.upload.benefits += ",401(k)"
    }
    if (obj.joblisting) {
      this.upload.endTime = new Date().getTime() + parseInt(obj.joblisting, 10)
    }
    if (obj.jobindefinite == true) {
      this.upload.endTime == -1
    }
    if (obj.company_name) {
      this.upload.companyName = obj.company_name
    }
    if (obj.company_description) {
      this.upload.companyDescription = obj.company_description
    }
    this.upload.image0 = "https://firebasestorage.googleapis.com/v0/b/sell4bids-4affe.appspot.com/o/job_imagewhite_background%2FJob-Image.png?alt=media&token=e7526576-c398-4f53-95e6-db8174054be2";
    this.upload.imagesCount = "1";
    this.upload.state = obj.usstate.toString();
    if (obj.lat) {
      this.upload.latitude = obj.lat.toString();
    }
    if(obj.zipcode){
      this.post.zipcode= obj.zipcode.toString();
      
    }
    if (obj.lng) {
      this.upload.longitude = obj.lng.toString();
    }
    if (obj.title) {
      this.upload.title = obj.title;
    }
    this.upload.token = this.token.toString()
    this.upload.startTime = new Date().getTime();
    this.upload.chargeTime = new Date().getTime();
    this.upload.uid = this.currentUser.toString();
    this.jobData(this.upload)

  }
  private jobData(upload: Job) {
    console.log("proudct upload", upload)
    let key = this.db.list('products/'+this.jobcat+'/'+this.jobtype+'/'+this.jobstate).push(upload).key;
    console.log("key................", key);

    if (key) {
      this.db.object('users/' + this.currentUser + '/products/selling/' + key).set({
        auctionType: this.jobtype,
        category: this.jobcat,
        state: this.jobstate

      }).then((success) => {
      this.showSpinne == false;      
        swal(
          'Congrats.',
          'Your item has been listed successfully on Sell4Bids.\n Good luck.',
          'success'
        )
      }).catch( error => {
        this.showSpinne == false;    
        swal(
          'Oops...',
          'Failed to Upload Data. Inccorrect Information!',
          'error'
      )
      })
      let url = '/';
      this._nav.navigate([url]);
    }

  }
}
