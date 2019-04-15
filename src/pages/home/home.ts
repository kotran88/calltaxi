import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayText:any="";
  constructor(public callnubmer:CallNumber,public navCtrl: NavController) {
   
  }

  call(){
    this.callnubmer.callNumber("18001010101", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
  select(value){
    console.log(value);

    if(value=="daeri"){
      this.displayText="대리운전 콜센터로 전화를 겁니다";
    }
    if(value=="flower"){
      this.displayText="꽃배달 서비스로 전화를 겁니다";
    }
    if(value=="funeral"){
      this.displayText="대리운전 콜센터로 전화를 겁니다";
    }
    if(value=="quick"){
      this.displayText="퀵 서비스로 전화를 겁니다";
    }
    if(value=="ari"){
      this.displayText="농협 아리샵몰로 전화를 겁니다";
    }
   
  }
}
