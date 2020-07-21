import { ScLayoutComponent } from './Booking/sc/sc-layout/sc-layout.component';
import { ManualPriceComponent } from './Ticketing/manual-price/manual-price.component';
import { TicketingLayoutComponent } from './Ticketing/ticketing-layout/ticketing-layout.component';
import { TicketingComponent } from './Ticketing/issue-ticket/ticketing.component';
import { QueueLayoutComponent } from './Queue/queue-layout/queue-layout.component';
import { LoginComponent } from './login/login.component';
import { AddSegmentComponent } from './Booking/add-segment/add-segment.component';
import { BookingLayoutComponent } from './Booking/booking-layout/booking-layout.component';
import { JsonRequestComponent } from './json-request/json-request.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal/terminal.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AddPassengerComponent } from './Booking/add-passenger/add-passenger.component';
import { RfComponent } from './Ticketing/ticket-operation/rf/rf.component';
import { RetrievePnrComponent } from './Booking/retrieve-pnr/retrieve-pnr.component';
import { TicketOperationComponent } from './Ticketing/ticket-operation/ticket-operation/ticket-operation.component';
import { RetrieveTicketComponent } from './Ticketing/retrieve-ticket/retrieve-ticket.component';




const appRoutes: Routes = [

  //Site routes goes here
  {
      path: '',
      component: SiteLayoutComponent,
      children: [
        { path: '', component: BookingLayoutComponent, pathMatch: 'full', data: { shouldReuse: false } },
        {path: 'queue', component:QueueLayoutComponent , data: { shouldReuse: false } },
        { path: 'json-request', component: JsonRequestComponent, data: { shouldReuse: false } },
        { path: 'terminal',  component: TerminalComponent , data: { shouldReuse: true }},
        { path: 'login', component: LoginComponent, data: { shouldReuse: false }  },
        { path: 'ticketing', component: TicketingComponent, data: { shouldReuse: false , animation: 'FilterPage' }   },
        { path: 'ticketing-layout', component: TicketingLayoutComponent, data: { shouldReuse: false }  },
        { path: 'rf', component: RfComponent, data: { shouldReuse: false }  },
        { path: 'sc', component: ScLayoutComponent, data: { shouldReuse: false }  },

        { path: 'retrieve-pnr', component: RetrievePnrComponent, data: { shouldReuse: false }  },
        { path: 'ticket-operation', component: TicketOperationComponent, data: { shouldReuse: false }  },
        { path: 'manual', component: ManualPriceComponent, data: { shouldReuse: false }  },
        { path: 'retrieve-ticket', component: RetrieveTicketComponent, data: { shouldReuse: false }  },







      ],

  },

//Booking Routs
   {
  path: '',
  component: BookingLayoutComponent,
  children: [
    { path: 'add-segment', component: AddSegmentComponent, pathMatch: 'full' , data: { shouldReuse: false }},
    { path: 'add-passenger', component: AddPassengerComponent, pathMatch: 'full' , data: { shouldReuse: false }},
    { path: 'login', component: LoginComponent , data: { shouldReuse: false }},


  ]

},

  // //no layout routes
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent },
  // // otherwise redirect to home
 { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
















