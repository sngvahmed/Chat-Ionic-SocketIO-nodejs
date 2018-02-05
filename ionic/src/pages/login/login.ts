import { Component, ViewChild } from '@angular/core'
import { Platform, MenuController, Nav, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';


@Component({
    selector: 'login-page',
    templateUrl: 'login.html'
})
export class LoginPage {
    @ViewChild('email') email: any;
    private username: string;
    private password: string;
    private error: string;
  
    constructor(private navCtrl: NavController) {
    }

    login(){
        console.log("hello world", this.username, this.password, this.error)
        this.navCtrl.setRoot(HelloIonicPage);
    }
}