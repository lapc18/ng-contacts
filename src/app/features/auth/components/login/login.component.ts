import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signinForm!: FormGroup;
  public isCredentialsInvalid: boolean = false;
  public exitsErrorOnResponse: boolean = false;

  get isUsernameInvalid(): boolean {
    return this.signinForm.get('username')!.invalid && this.signinForm.get('username')!.dirty
  }

  get isPasswordInvalid(): boolean {
    return this.signinForm.get('password')!.invalid && this.signinForm.get('password')!.dirty
  }


  constructor(){}

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    console.log(this.signinForm.get("username"))
    console.log(this.signinForm.get("password"))
  }


  onSignIn():void {

  }

}
