import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: ` <p> hello,{{user}}</p>
  <p> id:{{id}}</p>
  <button (click)="supprimerUser()">supprimer</button>`,
  styleUrl: './user.component.css'
})
export class USERComponent {
@Input() user: string='';
@Input() id: number = 0;
@Output() supprimer = new EventEmitter<number>();

supprimerUser() {
  this.supprimer.emit(this.id);

}
}