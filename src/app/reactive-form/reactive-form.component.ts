import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  productForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  

  ngOnInit(): void {
    this.productForm = this.fb.group({
    productName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    username: ['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]
    ],
    confirmPassword: ['', Validators.required]
  },
  {
    // validators: [Validation.match('password', 'confirmPassword')]
  });
    
}



  get productFormControls() {
    console.log(this.productForm.controls);
    return this.productForm.controls;
  }

  submitReactiveForm() {
    console.log(this.productForm);
    console.log(this.productForm.value);
  }
}
