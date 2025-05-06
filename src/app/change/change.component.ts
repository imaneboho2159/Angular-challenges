import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<p [ngStyle]="{ color: isActif ? 'green' : 'red' }">
  Statut : {{ isActif ? 'Actif' : 'Inactif' }}
</p>

  <button  (click)=" toggleActif()"> change status</button>`,
  styleUrl: './change.component.css'
})
export class ChangeComponent {

  isActif =true;
  toggleActif(){
    this.isActif =!this.isActif
  };

}
