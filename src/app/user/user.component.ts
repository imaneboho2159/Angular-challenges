import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: ` <p> hello,{{user}}</p>
  <p> id:{{id}}</p>
  <button (click)="supprimerUser()">supprimer</button>
  <input type="text" [(ngModel)]="userInpute" placeholder="enter your text" />
  <p>{{userInpute}}</p>
  <p> {{nom}}</p>`,
  styleUrl: './user.component.css'
})
export class USERComponent {
  nom:string =''
userInpute: string ='';
@Input() user: string='';
@Input() id: number = 0;
@Output() supprimer = new EventEmitter<number>();

supprimerUser() {
  this.supprimer.emit(this.id);

}
constructor( private route : ActivatedRoute){}

ngOnInit(){
  this.route.queryParams.subscribe((params)=>{
    this.nom=params['nom'];
    console.log(this.nom);

  });
}
}