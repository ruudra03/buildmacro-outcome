import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuilderDetail } from './BuilderDetail';
import { BuilderCodes } from './BuilderCodes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-builder-details',
  templateUrl: './builder-details.component.html',
  styleUrls: ['./builder-details.component.css']
})
export class BuilderDetailsComponent implements OnInit {
  NAME_REGEX = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
  EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  COMPANY_NAME_REGEX = /^[A-Za-z0-9\s\-\_\*\+\.\\]+$/

  error: boolean | undefined
  errMsg: string | undefined
  status: string = 'INVALID'
  builderCodes: BuilderCodes | undefined

  builderDetailsForm!: FormGroup
  builder: BuilderDetail | undefined

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.builderDetailsForm = this.formBuilder.group({
      builder_name: ['', Validators.required],
      mobile: [''],
      email: ['', Validators.required],
      company_name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    // Initialise BuilderCodes
    this.builderCodes = new BuilderCodes()

    this.builderDetailsForm.statusChanges.subscribe(status => {
      this.status = status
    });
  }

  submitDetails() {
    this.error = false
    this.errMsg = ''
    console.log('[DEV LOG] builder details submitted!');

    if (this.status === 'VALID') {
      console.log('[DEV LOG] checking details...');

      // Check name
      if (!this.NAME_REGEX.test(this.builderDetailsForm.value.builder_name)) {
        this.error = true
        this.errMsg = 'Invalid name!'
        console.log('[DEV LOG] submission rejected! (invalid "builder_name")');
      }

      // Check email
      if (!this.EMAIL_REGEX.test(this.builderDetailsForm.value.email)) {
        this.error = true
        this.errMsg = 'Invalid email!'
        console.log('[DEV LOG] submission rejected! (invalid "email")');
      }

      // Check company name
      if (!this.builderDetailsForm.value.company_name.match(this.COMPANY_NAME_REGEX)) {
        this.error = true
        this.errMsg = 'Invalid company name!'
        console.log('[DEV LOG] submission rejected! (invalid "company_name")');
      }

      // NO errors
      if (this.error === false) {
        console.log('[DEV LOG] submission accepted!');
        this.builder = new BuilderDetail(this.builderDetailsForm.value.builder_name, this.builderDetailsForm.value.email, this.builderDetailsForm.value.company_name, this.builderDetailsForm.value.mobile)
        this.generateCode()
        this.router.navigate(['/enter-code'])
      }
    } else {
      console.log('[DEV LOG] submission rejected! (required field(s) are empty)');
      this.error = true
      this.errMsg = 'Required fields are empty!'
    }
  }

  private generateCode(): string {
    console.log('[DEV LOG] generating code...');
    let code = Math.floor((Math.random() * 100000) + 1).toString()

    while (this.builderCodes?.checkGeneratedCode(code)) {
      console.log('[DEV LOG] generating another code...');
      code = Math.floor((Math.random() * 100000) + 1).toString()
    }

    this.builderCodes?.addUsedCode(code)
    console.log('[DEV LOG] code generated...', code);
    return code
  }

}
