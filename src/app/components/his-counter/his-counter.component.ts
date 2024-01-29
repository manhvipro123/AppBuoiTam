import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SharedModule } from '../../shared/modules/shared.module';

@Component({
  selector: 'app-his-counter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './his-counter.component.html',
  styleUrl: './his-counter.component.scss',
})
export class HisCounterComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }
}
