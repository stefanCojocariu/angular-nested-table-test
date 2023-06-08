import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './pages/person/person.component';
import { NestedTableComponent } from './components/nested-table/nested-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    NestedTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
