import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({selector:'app-root',imports:[CommonModule,ReactiveFormsModule],templateUrl:'./app.html',styleUrl:'./app.css'})
export class App {
  submitted = false;
  registrationForm;
  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+ -]{8,}$/)]],
      category: ['5K', Validators.required],
      shirt: ['M', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }
  isInvalid(field: string): boolean { const control = this.registrationForm.get(field); return Boolean(control?.invalid && (control.dirty || control.touched)); }
  submit(): void { this.submitted = true; if (this.registrationForm.valid) { this.registrationForm.markAsPristine(); } }
  reset(): void { this.registrationForm.reset({name:'',email:'',phone:'',category:'5K',shirt:'M',terms:false}); this.submitted = false; }
}
