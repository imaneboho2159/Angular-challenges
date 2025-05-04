import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, USERComponent],
  template: `<app-user [user]="'imane'"> </app-user>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
