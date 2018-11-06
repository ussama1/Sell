
  export class Job {
    $key: string;
    file:File;
    city:string;
    condition:string;
    description:string;
    image0:string;
    quantity:string;
    startPrice:string;
    rPrice:string;
    state:string;
    title:string;
    uid:string;
    acceptOffers:string;
    latitude:string;
    longitude:string;
    endTime:number;
    chargeTime:number;
    startTime:number;
    items:{};
    token:string;
    imagesCount:string;
    zipcode:string;
    
    ////////////////////////////////////job//////////////////////////////////
    benefits:string;
    companyDescription:string;
    companyName:string;
    employmentType:string;
    jobCategory:string;
    payPeriod:string;
    
    //////////////////////////////////End///////////////////////////////////
   
    
    progress:number;
    createdAt: Date = new Date();
    constructor() {
     
    }
  }