import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { get, set } from "../../services/storage";
import { Router } from '@angular/router';
//import { DataService, Message } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  before : any[];
  contacts : any[];
  icon : String ; 
  constructor(private http: HttpClient, private router: Router) {
    this.icon = '../../assets/avatar.png' ; 
    get("userid").then( res => this.myFunc(res));
  }
  
  // refresh(ev) {
  //   setTimeout(() => {
  //     ev.detail.complete();
  //   }, 3000);
  goToChat(para){
  //set("receiverid",id);
  //console.log(para);
    this.router.navigate(['/chat'],{queryParams: {id : para}})
  }
  myFunc(res){
     // console.log(res) ;
      this.http.get('http://www.pksystems.co.zw/intellipro/public/chat/mobilehomescreen/'+res).subscribe((response) => {
      //console.log(response) ;
        
      this.before = [response] ; 
      this.contacts = this.before[0];
      
      

    });
  
  }



}
