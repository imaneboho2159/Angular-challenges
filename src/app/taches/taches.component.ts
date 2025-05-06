import { Component, OnInit } from '@angular/core';
import { TacheService } from '../tache.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [CommonModule, FormsModule],

  template:`<ul>
  <li *ngFor="let tache of taches">{{tache}} </li>
  </ul>`,
  styleUrls: ['./taches.component.css']

})
export class TachesComponent implements OnInit {

  taches : string []=[];

  constructor( private tacheService : TacheService){}

  ngOnInit(): void {
this.taches= this.tacheService.getTaches();
console.log(this.taches);
    
  }
}
