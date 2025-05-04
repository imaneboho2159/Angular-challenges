import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: ` <p> hello,{{user}}</p>`,
  styleUrl: './user.component.css'
})
export class USERComponent {
@Input() user: string='';
}
