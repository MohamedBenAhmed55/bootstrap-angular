import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromisesComponent } from './promises/promises.component';
import { ListComponent } from './list/list.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { ObservableComponent } from './observable/observable.component';
import { IntervalComponent } from './interval/interval.component';
import { OfOptComponent } from './of-opt/of-opt.component';
import { SubjectComponent } from './subject/subject.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';
import { Sub4Component } from './sub4/sub4.component';
import { ReplysubjectComponent } from './replysubject/replysubject.component';

@NgModule({
  declarations: [
    AppComponent,
    PromisesComponent,
    ListComponent,
    FromeventComponent,
    ObservableComponent,
    IntervalComponent,
    OfOptComponent,
    SubjectComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component,
    Sub4Component,
    ReplysubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
