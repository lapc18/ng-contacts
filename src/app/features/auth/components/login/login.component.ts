import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthResponse } from 'src/app/core/models/auth-response.model';
import { AppStateService } from 'src/app/core/services/app-state.service';
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
  public isLoading: boolean = false;

  get isUsernameInvalid(): boolean {
    return this.signinForm.get('username')!.invalid && this.signinForm.get('username')!.dirty
  }

  get isPasswordInvalid(): boolean {
    return this.signinForm.get('pwd')!.invalid && this.signinForm.get('pwd')!.dirty
  }


  constructor(
    private router: Router,
    private appState: AppStateService,
    private authService: AuthService,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      pwd: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });

  }


  onSignIn():void {
    this.isLoading = true;
    this.hasInvalidCreds = false;
    this.hasBadResponse = false;
    this.authService.login({ ...this.signinForm.value }).subscribe({
      next: (res:AuthResponse) => {
        this.appState.currentUser = { ...res };
        this.appState.token = res.token;
        this.isLoading = false;
        this.router.navigate(['/contacts/board']);
      },
      error: (err) => {
        this.isLoading = false;
        const { status } = err;
        if(status >= 400 && status <= 499){
          this.messageService.add({severity: 'error', summary: 'Error loging-in', detail: 'Upss... Looks like you wrote bad credentials.'});
          this.hasInvalidCreds = true;
        } else if(status >= 500 && status <= 599) {
          this.messageService.add({severity: 'error', summary: 'Error loging-in', detail: 'Upss... Something went wrong, please try again later.'});
          this.hasBadResponse = true;
        }
      }
    });
  }

}
