import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { EnterCodeComponent } from './pages/enter-code/enter-code.component';
import { EnterPasswordComponent } from './pages/enter-password/enter-password.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
