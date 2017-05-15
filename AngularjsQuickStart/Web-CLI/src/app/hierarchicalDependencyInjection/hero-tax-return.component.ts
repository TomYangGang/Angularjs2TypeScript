/**
 * Created by shinetech-yg on 5/12/2017.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroTaxReturn }        from './HeroTaxReturn';
import { HeroTaxReturnService } from './hero-tax-return.service';
@Component({
  selector: 'hero-tax-return',
  templateUrl: './hero-tax-return.component.html',
  styleUrls: [ './hero-tax-return.component.css' ],
  providers: [ HeroTaxReturnService ]
})

export class HeroTaxReturnComponnent{
  message="";
  constructor(private heroTaxReturnService:HeroTaxReturnService){};
  @Output() close111=new EventEmitter<void>();

  get taxReturn():HeroTaxReturn{
    return this.heroTaxReturnService.taxReturn;
  }

  @Input()
  set taxReturn(htr:HeroTaxReturn){
    this.heroTaxReturnService.taxReturn=htr;
  }

   onCanceled(){
    this.flashMessage("Canceled");
    this.heroTaxReturnService.restoreTaxReturn();
  }

  onClose(){
     //调用父组件的closeTaxReturn， 因为要操作父组件的数组 selectedTaxReturns
     this.close111.emit();
   }

  onSaved() {
    this.flashMessage('Saved');
    this.heroTaxReturnService.saveTaxReturn();
  }

  flashMessage(msg:string){
    this.message=msg;
    setTimeout(()=>this.message="",500);
  }
}