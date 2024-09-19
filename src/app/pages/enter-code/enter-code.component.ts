import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.css']
})
export class EnterCodeComponent implements OnInit {
  error: boolean | undefined
  errMsg: string | undefined
  status: string = 'INVALID'

  enterCodeForm!: FormGroup
  code: string | undefined

  constructor(private formBuilder: FormBuilder) {
    this.enterCodeForm = this.formBuilder.group({
      code: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.enterCodeForm.statusChanges.subscribe(status => {
      this.status = status
    });
  }

  submitCode() {
    // TODO
  }

}
