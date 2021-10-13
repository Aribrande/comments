import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { TestasService } from './testas.service';
import { KomentaraiComponent } from './komentarai/komentarai.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    KomentaraiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ TestasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
