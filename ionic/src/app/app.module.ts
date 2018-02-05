import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ChatService } from '../pages/hello-ionic/chat-service';

@NgModule({
    declarations: [
        MyApp, HelloIonicPage, ItemDetailsPage, ListPage, LoginPage
    ],
    imports: [
        BrowserModule, 
        IonicModule.forRoot(MyApp),
        SocketIoModule.forRoot({ url: 'http://localhost:8006', options: {} })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp, HelloIonicPage, ItemDetailsPage, ListPage, LoginPage
    ],
    providers: [
        ChatService, StatusBar, SplashScreen, {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
