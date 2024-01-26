import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { Component } from '@angular/core';
import { SharedModule } from './shared/modules/shared.module';
import { onAuthStateChanged } from '@angular/fire/auth';
import { Auth} from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, TuiRootModule, TuiDialogModule, TuiAlertModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent {
  title = 'FirebaseApp';
  constructor(private auth : Auth,private router:Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        this.router.navigate(['/base']);
        console.log(user)
      } else {
        // User is signed out
        // ..."
        this.router.navigate(['/login']);
        console.log("no user")
      }
    });
  }
}
