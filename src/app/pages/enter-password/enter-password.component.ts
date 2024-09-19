import { Component, OnInit } from '@angular/core';
import { Password } from './Password';
import { PasswordList } from './PasswordList';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-password',
  templateUrl: './enter-password.component.html',
  styleUrls: ['./enter-password.component.css']
})
export class EnterPasswordComponent implements OnInit {
  error: boolean | undefined
  errMsg: string | undefined
  status: string = 'INVALID'
  passwordList: Password[] = []

  team_name: string | undefined
  enterPassForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.enterPassForm = this.formBuilder.group({
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    for (let password of PasswordList) {
      this.passwordList.push(password)
    }

    this.enterPassForm.statusChanges.subscribe(status => {
      this.status = status
    });
  }

  submitPassword() {
    this.error = false
    this.errMsg = ''
    console.log('[DEV LOG] password submitted!');

    if (this.status === 'VALID') {
      console.log('[DEV LOG] checking password...');
      for (let password of this.passwordList) {
        // Compare passwords
        if (password.password === +this.enterPassForm.value.password) {
          this.router.navigate(['/builder-details'])
          console.log('[DEV LOG] password accepted!');
        }
      }
    } else {
      console.log('[DEV LOG] password rejected! (no such password)');
      this.error = true
      this.errMsg = 'No such password. Try Again!'
    }
  }

}
