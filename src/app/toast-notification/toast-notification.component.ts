import { Component, OnInit } from '@angular/core';
import { ToastNotificationService } from '../toast-notification.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css']
})
export class ToastNotificationComponent implements OnInit {


  checkk:any;
  messages: any;
  notifications:any;
  unreadcount:any = 0;


  constructor(private toast:ToastNotificationService,private db: AngularFireDatabase) {

    this.checkk = 0;
    this.db.list('/users/'+localStorage.getItem("user")+'/followersnotifications/',{ preserveSnapshot: true})
      .subscribe(snapshots=>{
          snapshots.forEach(snapshot => {
            if(snapshot.key == 'UnreadCount'){
              this.unreadcount = parseInt(snapshot.val());
            }
          })
        },
        error => {
          // this.is_as_error=true;
          console.log(error);
        });
    this.messages = "No Notification"
    this.toast.setUnreadCount(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.notifications = this.toast.getNotifications()
    console.log("this.messages:  ",this.notifications)
  }

  initialization(){
    this.notifications = this.toast.getNotifications()
  }

  settingUnreadCount(unread){
    this.unreadcount = unread;
  }

  read(itemKey) {
    //this.toast.dismissMessage(itemKey)
    this.toast.readNotification(itemKey)
    this.unreadcount = this.toast.unreadCount;

  }

  Incrementcheck(){
    this.checkk = 1;
  }
  dismiss(itemKey) {
    //this.toast.dismissMessage(itemKey)
    this.toast.dismissNotification(itemKey)
  }


}