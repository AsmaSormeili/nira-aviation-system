
import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import {MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatNativeDateModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import 'hammerjs';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgGridModule } from 'ag-grid-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// Import library
import {Terminal} from './General-Components/terminal/primeng';
import { AddContactComponent } from './Booking/add-contact/add-contact.component';
import { AddEOTComponent } from './Booking/add-eot/add-eot.component';
import { QueueHeaderComponent } from './Queue/queue-header/queue-header.component';
import { QueueContentComponent } from './Queue/queue-content/queue-content.component';
import { QueueLayoutComponent } from './Queue/queue-layout/queue-layout.component';
import {DemoMaterialModule} from './material-module';
import { TerminalComponent } from './terminal/terminal.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { routing } from './app-routing.module';
import { StateSideComponent } from './layout/state-side/state-side.component';
import { AddSegmentComponent } from './Booking/add-segment/add-segment.component';
import { BookingLayoutComponent } from './Booking/booking-layout/booking-layout.component';
import { AddPassengerComponent } from './Booking/add-passenger/add-passenger.component';
import { AddSsrComponent } from './Booking/add-ssr/add-ssr.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { JsonRequestComponent } from './json-request/json-request.component';
import { ManualPriceComponent } from './Ticketing/manual-price/manual-price.component';
import { CustomRouteReuseStategy } from './Services/CustomRouteReuseStategy';
import { QueueRightSideComponent } from './Queue/queue-right-side/queue-right-side.component';
import { RoTabComponent } from './layout/state-side/side-tabs/ro-tab/ro-tab.component';
import { ScTabComponent } from './layout/state-side/side-tabs/sc-tab/sc-tab.component';
import { RtTabComponent } from './layout/state-side/side-tabs/rt-tab/rt-tab.component';
import { MainModalComponent } from './General-Components/main-modal/main-modal.component';
import { TerminalService } from './General-Components/terminal/terminalservice';
import {Terminal as TerminalNira } from './General-Components/terminal/terminal';
import {DomHandler } from './General-Components/dom/domhandler';
import { TicketingComponent } from './Ticketing/issue-ticket/ticketing.component';
import { TicketingLayoutComponent } from './Ticketing/ticketing-layout/ticketing-layout.component';
import { RfComponent } from './Ticketing/ticket-operation/rf/rf.component';
import { RetrieveTicketComponent } from './Ticketing/retrieve-ticket/retrieve-ticket.component';
import { RetrievePnrComponent } from './Booking/retrieve-pnr/retrieve-pnr.component';
import { EtrTabComponent } from './layout/state-side/side-tabs/etr-tab/etr-tab.component';
import { DtComponent } from './Ticketing/ticket-operation/dt/dt.component';
import { TicketOperationComponent } from './Ticketing/ticket-operation/ticket-operation/ticket-operation.component';
import { IRComponent } from './Ticketing/ticket-operation/ir/ir.component';
import { VtComponent } from './Ticketing/ticket-operation/vt/vt.component';
import { RvComponent } from './Ticketing/ticket-operation/rv/rv.component';
import { DhComponent } from './Ticketing/ticket-operation/dh/dh.component';
import { CxComponent } from './Ticketing/ticket-operation/cx/cx.component';
import { ExComponent } from './Ticketing/ticket-operation/ex/ex.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GeneralPipe } from './Pipes/general.pipe';
import { NextButtonComponent } from './Booking/next-button/next-button.component';
import { ScLayoutComponent } from './Booking/sc/sc-layout/sc-layout.component';
import { ScContentComponent } from './Booking/sc/sc-content/sc-content.component';




const  notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 30
    },
    vertical: {
      position: 'bottom',
      distance: 70,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 15
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 300
  }
};



@NgModule({
  declarations: [
    AppComponent,
    JsonRequestComponent,
    TerminalComponent,
    Terminal,
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    StateSideComponent,
    AddSegmentComponent,
    BookingLayoutComponent,
    AddPassengerComponent,
    AddSsrComponent,
    LoginComponent,
    AddContactComponent,
    AddEOTComponent,
    QueueHeaderComponent,
    QueueContentComponent,
    QueueLayoutComponent,
    QueueRightSideComponent,
    RoTabComponent,
    ScTabComponent,
    RtTabComponent,
    MainModalComponent,
    TicketingComponent,
    TicketingLayoutComponent,
    RfComponent,
    RetrieveTicketComponent,
    RetrievePnrComponent,
    EtrTabComponent,
    DtComponent,
    TicketOperationComponent,
    IRComponent,
    VtComponent,
    RvComponent,
    DhComponent,
    CxComponent,
    ExComponent,
    ManualPriceComponent,
    GeneralPipe,
    NextButtonComponent,
    ScLayoutComponent,
    ScContentComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FontAwesomeModule,
    MatInputModule,
    MatSliderModule,
    NotifierModule,
    NgxSpinnerModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    MatIconModule,
    Ng2SmartTableModule,
    FlexLayoutModule,
    MatNativeDateModule,
    routing,
    DpDatePickerModule,
    CommonModule,
    NotifierModule.withConfig(notifierDefaultOptions),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgxMaterialTimepickerModule,
    AgGridModule.withComponents([])


  ],
  exports: [
 ],
  providers: [TerminalService , TerminalNira, DomHandler ,
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStategy },
  ],

  bootstrap: [AppComponent],
  entryComponents: [ MainModalComponent ]

})
export class AppModule {






}
