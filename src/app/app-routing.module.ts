import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonListComponent} from "./pages/person-list/person-list.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'person/list', pathMatch: 'full'
  },
  {
    path: 'person', children: [
      {path: 'list', component: PersonListComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
