import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterPasswordComponent } from './pages/enter-password/enter-password.component';
import { EnterCodeComponent } from './pages/enter-code/enter-code.component';
import { StartComponent } from './pages/start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms';
import { BuilderDetailsComponent } from './pages/builder-details/builder-details.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    EnterPasswordComponent,
    EnterCodeComponent,
    StartComponent,
    BuilderDetailsComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
