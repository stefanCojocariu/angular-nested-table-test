import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import { PersonListComponent } from './pages/person-list/person-list.component';
import { NestedTableComponent } from './components/table/nested-table.component';
import { FormsModule } from '@angular/forms';
import { ColumnResizeDirective } from './directives/column-resize.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    NestedTableComponent,
    ColumnResizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
