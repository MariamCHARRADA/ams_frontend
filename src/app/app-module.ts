import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { AddIngPipe } from './pipes/add-ing-pipe';
import { FirstLetterUppercasePipe } from './pipes/first-letter-uppercase-pipe';

@NgModule({
  declarations: [
    App,
    Home,
    AddIngPipe,
    FirstLetterUppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
