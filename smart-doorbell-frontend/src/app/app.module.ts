import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dashboard/dashboard.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AuthGuard } from './auth-guard.service';

import { AppBootstrapModule } from './app-bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    DashBoardComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [AmplifyService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
