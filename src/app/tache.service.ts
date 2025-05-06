import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor() { }

  getTaches(){
    return [
      'documentation sur spring boot',
      'faire des challenges sur angular',
      'go out with friends',
      'go to the gym'
    ];
  }
}
