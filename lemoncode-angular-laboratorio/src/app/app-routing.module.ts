import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotateComponent } from './private/rotate/rotate.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { GalleryComponent } from './private/gallery/gallery.component';
import { ProfileComponent } from './private/profile/profile.component';
import { AboutComponent } from './public/about/about.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { LoginrxjsComponent } from './public/loginrxjs/loginrxjs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'loginrxjs',
    component: LoginrxjsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'rotate',
    component: RotateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
