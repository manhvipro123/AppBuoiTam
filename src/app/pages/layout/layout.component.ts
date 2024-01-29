import { Component } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { ManagementComponent } from './components/management/management.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule,NavbarComponent, CartComponent, ManagementComponent,],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
