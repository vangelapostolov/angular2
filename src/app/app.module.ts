import { NgModule }     from '@angular/core';
import { AppComponent } from './app.component';
//import { CommonModule } from './common/common.module';
import { HomeModule } from './home/home.module';
//import { ContactModule } from './contacts/contacts.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppNavComponent } from './app-nav.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //CommonModule,
    HomeModule,
    //ContactModule
  ],
  declarations: [AppComponent, AppNavComponent],
  exports: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
