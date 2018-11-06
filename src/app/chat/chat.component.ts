import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import 'firebase/storage'
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chat_list: any = [];
  oneChat: any = [];
  currentUser;
  reciever = {};
  sender = {};
  order: string = 'unreadCount';
  // timeDifference : Number;
  status: string;
  chat: string;
  recieverId;
  recieverName;
  senderId;
  senderName;
  otherUser;
  searchName;
  mainChat: any = [];
  onlineUser;
  prof_dict = {};
  mainPath;
  constructor(private _nav: Router, public authService: AuthService, private afAuth: AngularFireAuth, private route: ActivatedRoute, private db: AngularFireDatabase) { }

  searchitem(item) {
    console.log(item)
    this.chat_list
      .filter((chat: any) => {
        // this.mainChat =[]
        if (chat['name'].toLowerCase().indexOf(item.toLowerCase()) > -1) {
          this.mainChat.push(chat)
          console.log("main", this.mainChat)
        }
      });
  }
  private allChats() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.currentUser = res.uid
        let chat_user = '/users/' + res.uid + '/chat';
        this.db.list(chat_user, {

          query: {
            orderByChild: 'lastMessageTime'
          }

        }).subscribe(data => {
          data.reverse()
          this.chat_list = data;
          this.mainChat = data;
          console.log("chat", this.mainChat)

        })

      }
    })
  }
  getStatus(receiverTime) {
    // let serverTime = firebase.database.ServerValue.TIMESTAMP ;
    let timeDifference: Number;
    timeDifference = new Date().getTime() - receiverTime;
    console.log("timedifference", timeDifference)
    if (timeDifference < (60 * 1000)) {
      this.status = "Online";
      console.log("online")
    }
    else {
      let diffSeconds = Number(timeDifference) / 1000 % 60;
      let diffMinutes = Number(timeDifference) / (60 * 1000) % 60;
      let diffHours = Number(timeDifference) / (60 * 60 * 1000);
      let diffInDays = Number(timeDifference) / (1000 * 60 * 60 * 24);
      console.log("seaconds", diffSeconds, "Minutes", diffMinutes, "Hours", diffHours, "DAys", diffInDays);
      if (diffInDays > 1) {
        this.status = "Last active " + parseInt(diffInDays + "") + " days ago."
      }
      else if (diffInDays == 1) {
        this.status = "Last active " + parseInt(diffInDays + "") + " day ago.";

      } else if (diffHours < 24 && diffHours > 1) {
        this.status = "Last active " + parseInt(diffHours + "") + " hours ago.";
      } else if (diffHours == 1) {
        this.status = "Last active " + parseInt(diffHours + "") + " hour ago.";
      } else if (diffMinutes > 1) {
        this.status = "Last active " + parseInt(diffMinutes + "") + " minutes ago.";
      } else {
        this.status = "Last active " + parseInt(diffSeconds + "") + " seconds ago.";
      }
    }
  }
  private selectChat(rid) {
    this.chatRoom(rid);
    // $(".chat-body-msgs").scrollToBottom(0)

    let user_refer = this.db.object('/users/' + this.onlineUser + '/chat/' + rid).update({
      unreadCount: "0"
    })

    // user_refer.$ref.transaction(count => {
    //   console.log("unread",count)
    //   let num = 0;
    //  count['unreadCount'] = num.toString();
    //   return count ? count : 0              
    // })



    this.db.object('/users/' + rid, { preserveSnapshot: true })
      .subscribe(snapshot => {
        // snapshots.forEach(snapshot => {
        this.reciever = snapshot.val();
        // })
        this.recieverId = rid;
        this.recieverName = this.reciever['name']
        console.log("reciever", this.reciever)
        this.getStatus(this.reciever['startTime'])
      })







  }

  chatRoom(rid) {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        let chat_path;
        let bpath = this.db.object('/chat_rooms/' + rid + '_' + res.uid, { preserveSnapshot: true });
        bpath.subscribe(data => {
          this.oneChat = [];
          if (data.val() == null) {
            this.mainPath = '/chat_rooms/' + res.uid + '_' + rid;

          }
          else {
            this.mainPath = '/chat_rooms/' + rid + '_' + res.uid;

          }
          console.log("path", this.mainPath)
          this.getRecord(this.mainPath)
        })

      }
    })


  }
  getRecord(path) {

    this.db.list(path, {

      query: {
        limitToLast: 200,
        orderByChild: 'timestamp',
      }
    }

    ).subscribe(chat => {

      this.oneChat = chat
      console.log("onechat", this.oneChat, chat)

    })

  }
  singleUser(uid) {
    let url = 'chat';
    this._nav.navigate([url], { queryParams: { uid: uid } });
    this.selectChat(uid)
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.sender = {};
        this.db.object('/users/' + res.uid, { preserveSnapshot: true })
          .subscribe(snapshot => {
            // snapshots.forEach(snapshot => {
            console.log("snap", snapshot.val())
            this.sender = snapshot.val();
            // })
            this.senderId = res.uid;
            this.senderName = this.sender['name'];

          })


        this.onlineUser = res.uid
        let num = 0;
        this.db.object('users/' + res.uid).update({
          unreadCount: num.toString()
        });
      }
    })
    // document.getElementById('footer').scrollTop()
    // $(".chat-body-msgs").scrollToBottom($(".chat-body-msgs")[0].scrollHeight);
    this.route.queryParams
      .subscribe(params => {
        console.log("query", params)
        this.otherUser = params.uid;
        this.selectChat(params.uid)
      })
    this.allChats();

  }


  onSubmit(f: NgForm) {
    if (f.valid == true) {
      let chat_msg: string;
      chat_msg = f.value.chat
      this.chat = null;
      console.log(f.value.chat, this.recieverId, this.recieverName, this.senderId, this.senderName);

      let chat_path;
      // let bpath = this.db.object('chat_rooms/' + this.senderId + '_' + this.recieverId, { preserveSnapshot: true });
      // bpath.subscribe(data => {
      //   let objectSubscription
      //   if (data.val() == null) {
      //     chat_path = 'chat_rooms/' + this.recieverId + '_' + this.senderId;

      //   }
      //   else { 
      //     chat_path = 'chat_rooms/' + this.senderId + '_' +this.recieverId;

      //   }
      let time = new Date().getTime()
      this.db.object(this.mainPath + '/' + time).set({
        timestamp: time,
        message: chat_msg,
        receiverUid: this.recieverId,
        receiver: this.recieverName,
        senderUid: this.senderId,
        sender: this.senderName
      }).then((success) => {
        let count_refer = this.db.object('/users/' + this.recieverId + '/chat/' + this.senderId)

        count_refer.$ref.transaction(count => {
          console.log("unread", count['unreadCount'])
          let num = Number(count['unreadCount']) + 1;
          let time = new Date().getTime()
          count['unreadCount'] = num.toString();
          if (count['lastMessageTime'] == undefined) {
            count['lastMessageTime'] = time;
          }
          else {
            count.lastMessageTime = time;

          }
          if (count['lastMessage'] == undefined) {
            count['lastMessage'] = chat_msg.toString();
          }
          else {
            count.lastMessage = chat_msg.toString();

          }
          return count ? count : 0
        })




      })

      // objectSubscription.unsubscribe();

      // })




    }
  }

}
