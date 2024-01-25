import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { SharedModule } from '../../shared/modules/shared.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(public fbService: FirebaseService) {}
}
