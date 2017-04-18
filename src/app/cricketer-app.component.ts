import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { CricketerService } from 'app/services/cricketer.service';
import { ICricketList, ICricketerModel } from './interface/cricketer-list';
import { IPlayerType } from 'app/interface/player-type';
import { CriketerDropDownService } from 'app/services/criketer-drop-down.service';

declare const alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './cricketer-app.component.html',
  styleUrls: ['./cricketer-app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [CricketerService]
})

export class AppComponent implements OnInit {
  /**Public variable */
  cricketersArray: ICricketList[] = [];
  playerType: IPlayerType[] = [];

  cricketerModel: ICricketerModel;
  cricketerDetail: ICricketList;

  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _cricketService: CricketerService, private _cricketerDropDown: CriketerDropDownService) { }

  ngOnInit() {
    
    /**Define default values */
    this.cricketerModel = {
      firstName: '',
      lastName: '',
      favShot: '',
      playerType: ''
    };

    this.playerType = this._cricketerDropDown.getPlayerType();
  }

  /**Add a cricket */
  addCriketer(values) {
    // values : {
    //   favShot: ""
    //   firstName: ""
    //   lastName: ""
    //   playerType: ""
    // }
    this.cricketerDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      favShot: values.favShot,
      batsmanBowler: values.playerType
    };
    // /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);
    // Using 3rd party library to show message.
    alertify.notify('Cricketer Added Successfully', 'success', 3);

    this.cricketersArray = this._cricketService.getCricket();
  };

   /**Reset a form */
  resetForm(f) {
    f.reset();
  };

}
