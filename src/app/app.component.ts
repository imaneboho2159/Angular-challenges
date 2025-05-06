import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERComponent } from './user/user.component';
import { MonSiDirective } from './directives/mon-si.directive';
import { TachesComponent } from './taches/taches.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, USERComponent, MonSiDirective,TachesComponent],
  template: `<app-user [user]="'imane'" [id]="1"  (supprimer)="supprimerUserId($event)"> </app-user>
  <button  (click)="visible=!visible">Display/Hide</button>
  <p  *appMonSi="visible"> hi imane,how are you</p> 
  <app-taches></app-taches>`,
  styleUrls: ['./app.component.css'] 


})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  visible= true;


  supprimerUserId(id:number) {
    console.log("theuser with id "+id+"isdeleted");
  }
}
