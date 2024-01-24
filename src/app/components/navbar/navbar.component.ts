import { Component } from '@angular/core';
import {FirebaseService} from "../../services/firebase/firebase.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    constructor(public fbService:FirebaseService) {
    }
}
