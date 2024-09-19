import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.css']
})
export class EnterCodeComponent implements OnInit {
  error: boolean | undefined;
  errMsg: string | undefined;
  status: string = 'INVALID';

  enterCodeForm!: FormGroup;
  code: string | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router) { // Inject the router
    this.enterCodeForm = this.formBuilder.group({
      code: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.enterCodeForm.statusChanges.subscribe(status => {
      this.status = status;
    });
  }

  submitCode() {
    // Handle code submission
  }

  // New method to navigate to the 'enter-password' component
  goToEnterPassword() {
    this.router.navigate(['/enter-password']);  // Adjust the route if needed
  }
}
