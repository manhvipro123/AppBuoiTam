import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private authService:AuthService) {}

  signOut(){
    this.authService.signOut()
  }
}
