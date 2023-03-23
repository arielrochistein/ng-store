import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { IUser } from 'src/app/shared/models/user.interface';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public selectedValue: string = '';

  public roles: Role[] = [
    { value: 'none', viewValue: 'None' },
    { value: 'admin', viewValue: 'Admin' },
    { value: 'user', viewValue: 'User' },
  ];

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService
  ) {}

  public onSubmit(loginForm: NgForm): void {
    console.log(loginForm.value);
    const user: IUser = loginForm.value;
    this.authService.login(user);
    this.dialogRef.close();
  }
}
