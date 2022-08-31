import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PrivateMenuComponent } from './layout/private-menu/private-menu.component';
import { PublicMenuComponent } from './layout/public-menu/public-menu.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { AboutComponent } from './public/about/about.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { GalleryComponent } from './private/gallery/gallery.component';
import { RotateComponent } from './private/rotate/rotate.component';
import { ProfileComponent } from './private/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { RotateDirective } from './directives/rotate.directive';
import { LoginrxjsComponent } from './public/loginrxjs/loginrxjs.component';
import { RxjsMenuComponent } from './layout/rxjs-menu/rxjs-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrivateMenuComponent,
    PublicMenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    GalleryComponent,
    RotateComponent,
    ProfileComponent,
    RotateDirective,
    LoginrxjsComponent,
    RxjsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
