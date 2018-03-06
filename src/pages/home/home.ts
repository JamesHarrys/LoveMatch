import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nameA = '';
  nameB = '';
  get score() {
    const letters = (this.nameA + this.nameB).toLowerCase();
    let sum = 0;
    for (let i = 0; i < letters.length; i++) {
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }
  constructor(public navCtrl: NavController) {

  }

}
