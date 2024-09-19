import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterPasswordComponent } from './pages/enter-password/enter-password.component';
import { EnterCodeComponent } from './pages/enter-code/enter-code.component';
import { StartComponent } from './pages/start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    EnterPasswordComponent,
    EnterCodeComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
