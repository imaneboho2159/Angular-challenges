import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERComponent } from './user/user.component';
import { MonSiDirective } from './directives/mon-si.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, USERComponent, MonSiDirective],
  template: `<app-user [user]="'imane'" [id]="1"  (supprimer)="supprimerUserId($event)"> </app-user>
  <button  (click)="visible=!visible">Display/Hide</button>
  <p  *appMonSi="visible"> hi imane,how are you</p>
  `
  ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  visible= true;

  supprimerUserId(id:number) {
    console.log("theuser with id "+id+"isdeleted");
  }
}
