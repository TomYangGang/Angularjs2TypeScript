import { NgModule }           from '@angular/core';
import { MyContactComponent }   from './my.contact.component';
import { ContactService }     from './my.contact.service';
import { MyHighlightDirective as ContactHighlightDirective} from '../my.highlight.directive';

import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports:      [ SharedModule],
  declarations: [ MyContactComponent, ContactHighlightDirective ],
  exports:      [ MyContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
