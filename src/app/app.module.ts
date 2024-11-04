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

@NgModule({
  declarations: [
    AppComponent,
    PromisesComponent,
    ListComponent,
    FromeventComponent,
    ObservableComponent,
    IntervalComponent,
    OfOptComponent,
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
