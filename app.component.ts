import { AllConfigsService } from './Services/all-configs.service';
import { RetrievePnrComponent } from './Booking/retrieve-pnr/retrieve-pnr.component';
import { AuthenticationService } from './Services/authentication.service';
import { Component, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocalStorageService , SessionStorageService } from 'ngx-webstorage';

import {RtTabComponent} from './layout/state-side/side-tabs/rt-tab/rt-tab.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RtTabComponent]
})

export class AppComponent {
  title = 'Terminal';

 public spinnerType =  'line-scale-pulse-out';

 isLoggedIn = false;
 // tslint:disable-next-line: max-line-length
 constructor(private elementRef: ElementRef , private authentication: AuthenticationService,   private router: Router , private rt: RtTabComponent,     private Session: SessionStorageService,
             private localSt: LocalStorageService , private allConf: AllConfigsService ) {

  this.router.events.subscribe((e) => {
    if (e instanceof NavigationEnd) {

     let airlineCode = this.localSt.retrieve('currentAirlineCode');
     if (isNullOrUndefined(airlineCode)) { airlineCode = 'ZV'; }

     this.allConf.lastAirlineCode = airlineCode;
     //alert('in app module' + airlineCode);
     this.allConf.airlineHandling(airlineCode);
     this.isLoggedIn = this.Session.retrieve('islogged');
     const session = this.Session.retrieve('sessionCode');

       // \\this.authentication.isLogged;
     if (this.isLoggedIn === null || this.isLoggedIn !== true && this.isLoggedIn.toString() !== 'true' || session === null) {
          this.authentication.signOut();     }    }


 });

 }


 // tslint:disable-next-line: use-life-cycle-interface
 ngAfterContentChecked() {
  this.isLoggedIn = this.authentication.isLogged ;
}
ngAfterViewInit() {
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
}

}
