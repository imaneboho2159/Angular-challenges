import { Directive, ViewContainerRef } from '@angular/core';
import { Input } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[appMonSi]',
  standalone: true
})
export class MonSiDirective {

  constructor( private templateRef :TemplateRef<any>  , private viewContainerRef : ViewContainerRef) {}
  @Input() set appMonSi(condition:boolean){
    if(condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.remove();
    }
  }

}
