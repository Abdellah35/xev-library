import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'xev-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    displayName: new FormControl('', Validators.required)
  });
  
  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      
      this.submitEM.emit(this.form.value);
    }else{
      alert('invalid')
    }
  }
}
