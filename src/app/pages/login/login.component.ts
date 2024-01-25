import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { TuiCurrency } from '@taiga-ui/addon-commerce';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
import { Router } from '@angular/router';
class User {
  constructor(readonly firstName: string, readonly lastName: string) {}

  toString(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Account {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly amount: number,
    readonly currency: TuiCurrency,
    readonly cardSvg: string
  ) {}
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  testForm = new FormGroup({
    nameValue: new FormControl('', Validators.required),
    passwordValue: new FormControl('', Validators.required),
  });

  login() {
    this.router.navigate(['/base']);
  }
}
