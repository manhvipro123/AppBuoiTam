import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedModule } from '../../shared/modules/shared.module';
import { Store } from '@ngrx/store';
import * as CounterActions from '../../ngrx/counter/counter.actions';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.scss',
})
export class MyCounterComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }
  ngOnInit(): void {}

  increment() {
    console.log('increment');
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    console.log('decrement');

    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    console.log('reset');

    this.store.dispatch(CounterActions.reset());
  }
}
