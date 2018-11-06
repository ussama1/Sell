import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


export class Message {
  content: string;
  style: string;
  dismissed: boolean = false;
  name:any;
  image:any;
  uid:any;
  read:any;

  // constructor(content, style?) {
  //   this.content = content
  //   this.style = style || 'info'
  // }

  constructor(name,image,uid,content,read) {
    this.content = content
    this.name = name;
    this.uid = uid;
    this.image = image;
    this.read = read;
    //this.style = style || 'info'
  }

}

@Injectable()
export class ToastNotificationService {

  userid:any;
  unreadCount:any = 0;

  constructor(private db: AngularFireDatabase) { }

  getMessages(): FirebaseListObservable<Message[]> {
    return this.db.list('/messages', {
      query: {
        orderByKey: true
      }
    });
  }

  getNotifications(): FirebaseListObservable<Message[]> {
    console.log("UUUUUser id: ",localStorage.getItem("user"));
    return this.db.list('/users/'+localStorage.getItem("user")+'/followersnotifications', {
      query: {
        orderByKey: true
      }
    });
  }

  // sendMessage(content, style) {
  //   const message = new Message(content)
  //   this.db.list('/messages').push(message)
  // }

  sendNotification(follower,userid) {
    var name = follower;
    var content = "started following"
    var image = localStorage.getItem("image");
    var uid =  localStorage.getItem("user");
    var read = false;
    const message = new Message(name,image,uid,content,read)
    //this.db.list('/users/'+userid+'/followersnotifications').push(message)
    this.db.object('/users/'+userid+'/followersnotifications/'+localStorage.getItem("user")).update(message)

    var check = 0;
    var check2 = 0;
    var value = 0;
    this.db.list('/users/'+userid+'/followersnotifications/',{ preserveSnapshot: true})
      .subscribe(snapshots=>{
          snapshots.forEach(snapshot => {
            if(snapshot.key == 'UnreadCount'){
              check = 1;
              value = parseInt(snapshot.val()) + 1;
            }
          })
        check2 = 1;
        },
        error => {
          // this.is_as_error=true;
          console.log(error);
        });
    if(check == 1){
      this.db.object('/users/'+userid+'/followersnotifications/').update({'UnreadCount':value})
    }else{
      this.db.object('/users/'+userid+'/followersnotifications/').update({'UnreadCount':1})
    }
  }


  setUnreadCount(user){

    console.log("User: ",user)
    this.db.list('/users/'+user+'/followersnotifications/',{ preserveSnapshot: true})
      .subscribe(snapshots=>{
          snapshots.forEach(snapshot => {
            if(snapshot.key == 'UnreadCount'){
              this.unreadCount = parseInt(snapshot.val());
              //var toastobject = new ToastMessagesComponent();
              //toastobject.settingUnreadCount(this.unreadCount)
              console.log("UnreadCount: ",this.unreadCount)
            }
          })
        },
        error => {
          // this.is_as_error=true;
          console.log(error);
        });

  }


  // getUnreadCount(user){
  //
  //   console.log("User: ",user)
  //   var check = 0;
  //   var check2 = 0;
  //   var value = 0;
  //   this.db.list('/users/'+user+'/followersnotifications/',{ preserveSnapshot: true})
  //     .subscribe(snapshots=>{
  //         snapshots.forEach(snapshot => {
  //           if(snapshot.key == 'UnreadCount'){
  //             check = 1;
  //             value = parseInt(snapshot.val());
  //           }
  //         })
  //         check2 = 1;
  //       },
  //       error => {
  //         // this.is_as_error=true;
  //         console.log(error);
  //       });
  //   if(check == 1){
  //     return value.toString();
  //   }else{
  //     return "0";
  //   }
  // }

  dismissMessage(messageKey) {
    this.db.object(`messages/${messageKey}`).update({'dismissed': true})
  }

  dismissNotification(notificationKey) {
    this.db.object(`users/`+localStorage.getItem("user")+`/followersnotifications`+`/${notificationKey}`).update({'dismissed': true})
  }

  readNotification(notificationKey) {
    this.db.object(`users/`+localStorage.getItem("user")+`/followersnotifications`+`/${notificationKey}`).update({'read': true})

    var value = 0;
    this.db.list('/users/'+localStorage.getItem("user")+'/followersnotifications/',{ preserveSnapshot: true})
      .subscribe(snapshots=>{
          snapshots.forEach(snapshot => {
            if(snapshot.key == 'UnreadCount'){
              if(parseInt(snapshot.val()) != 0) {
                value = parseInt(snapshot.val()) - 1;
                this.db.object('/users/' + localStorage.getItem("user") + '/followersnotifications/').update({'UnreadCount': value})
                this.unreadCount = value;
              }
            }
          })
        },
        error => {
          // this.is_as_error=true;
          console.log(error);
      });
  }

}