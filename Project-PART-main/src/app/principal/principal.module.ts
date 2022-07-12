import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PrincipalComponent} from './principal.component';


@NgModule({
  declarations: [PrincipalComponent],
  exports: [PrincipalComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalModule { }
