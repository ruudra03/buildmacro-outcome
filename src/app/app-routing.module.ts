import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { EnterCodeComponent } from './pages/enter-code/enter-code.component';
import { EnterPasswordComponent } from './pages/enter-password/enter-password.component';
import { BuilderDetailsComponent } from './pages/builder-details/builder-details.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'enter-password',
    component: EnterPasswordComponent
  },
  {
    path: 'enter-code',
    component: EnterCodeComponent
  },
  {
    path: 'builder-details',
    component: BuilderDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
