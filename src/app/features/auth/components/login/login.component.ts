import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signinForm!: FormGroup;
  public hasInvalidCreds: boolean = false;
  public hasBadResponse: boolean = false;

  get isUsernameInvalid(): boolean {
    return this.signinForm.get('username')!.invalid && this.signinForm.get('username')!.dirty
  }

  get isPasswordInvalid(): boolean {
    return this.signinForm.get('pwd')!.invalid && this.signinForm.get('pwd')!.dirty
  }


  constructor(
    private router: Router,
    private authService: AuthService,
  ){}

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      pwd: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });

  }


  onSignIn():void {
    this.hasInvalidCreds = false;
    this.authService.login({ ...this.signinForm.value }).subscribe((res) => {
      this.hasInvalidCreds = !res;
      if(res) this.router.navigate(['/home/contacts']);
    });
  }

}
