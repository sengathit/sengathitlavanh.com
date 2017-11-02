import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { CvComponent } from './cv/cv.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { SaymynameComponent } from './saymyname/saymyname.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    CvComponent,
    FooterComponent,
    NavigationComponent,
    NavButtonComponent,
    SaymynameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
