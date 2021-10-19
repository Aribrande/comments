import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { TestasService } from './testas.service';
import { KomentaraiComponent } from './komentarai/komentarai.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpalvinkDirective } from './spalvink.directive';
import { TestDropdowComponent } from './test-dropdow/test-dropdow.component';
import { DropdownDirective } from './dropdown.directive';
import { ProgressBarDirective } from './progress-bar.directive';
import { RegistracijaComponent } from './registracija/registracija.component';
import { FormsModule } from '@angular/forms';
import { UsedEmailDirective } from './used-email.directive';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    KomentaraiComponent,
    SpalvinkDirective,
    TestDropdowComponent,
    DropdownDirective,
    ProgressBarDirective,
    RegistracijaComponent,
    UsedEmailDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ TestasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
