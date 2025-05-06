import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERComponent } from './user/user.component';
import { MonSiDirective } from './directives/mon-si.directive';
import { TachesComponent } from './taches/taches.component';
import { PostsComponent } from './posts/posts.component';
import { ChangeComponent } from './change/change.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, USERComponent, MonSiDirective,TachesComponent,PostsComponent,ChangeComponent],
  template: `<app-user [user]="'imane'" [id]="1"  (supprimer)="supprimerUserId($event)"> </app-user>
  <button  (click)="visible=!visible">Display/Hide</button>
  <p  *appMonSi="visible"> hi imane,how are you</p> 
  <app-taches></app-taches>
  <router-outlet></router-outlet>
  <app-posts></app-posts>
  <app-change></app-change>`,
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
