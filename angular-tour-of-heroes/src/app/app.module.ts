import { MessagesComponent } from './messages/messages.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/**
 * 필요한 component만 declarations에 추가 합니다.
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
