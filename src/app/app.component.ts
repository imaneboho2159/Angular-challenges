import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, USERComponent],
  template: `<app-user [user]="'imane'" [id]="1"  (supprimer)="supprimerUserId($event)"> </app-user>
  `
  ,
  styleUrl: './app.component.css'
})
export class AppComponent {

  supprimerUserId(id:number) {
    console.log("theuser with id "+id+"isdeleted");
  }
}
