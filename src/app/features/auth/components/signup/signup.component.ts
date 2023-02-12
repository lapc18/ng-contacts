import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  public existEmail: boolean = false;
  public exitsErrorOnResponse: boolean = false;

  constructor(
    private sessionStorageMng: SessionStorageService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwd: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  signUp(): void {
    this.existEmail = false;
    this.exitsErrorOnResponse = false;
    this.authService.register({...this.signupForm.value}).subscribe({
      next: (res) => {
        this.router.navigate(["/home/contacts"]);
      },
      error: () => {
        this.exitsErrorOnResponse = true;
      }
    });
  }
}
