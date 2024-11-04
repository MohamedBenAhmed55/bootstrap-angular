import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromisesComponent } from './promises/promises.component';
import { ListComponent } from './list/list.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { ObservableComponent } from './observable/observable.component';
import { IntervalComponent } from './interval/interval.component';
import { OfOptComponent } from './of-opt/of-opt.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path: 'promises',
    component: PromisesComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'fromevent',
        component: FromeventComponent,
      },
      {
        path: 'interval',
        component: IntervalComponent,
      },
      {
        path: 'of-opt',
        component: OfOptComponent,
      },
      {
        path: 'subject',
        component: SubjectComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'promises',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
