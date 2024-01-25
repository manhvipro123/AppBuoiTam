import { Component } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
