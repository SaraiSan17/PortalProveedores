import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {

  constructor(private router: Router) { }

  form: FormGroup = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.router.navigate(['/', 'app']);
    }else {
      console.log("Error")
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

}
