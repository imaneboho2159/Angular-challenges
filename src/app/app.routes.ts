import { Routes } from '@angular/router';
import { USERComponent } from './user/user.component';


export const routes: Routes = [
   { path: '', redirectTo: 'user/sarah', pathMatch: 'full' },
   { path:'user/:nom' , component: USERComponent }, 
  
       
];