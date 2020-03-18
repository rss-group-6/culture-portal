import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxSpinnerModule, NgbModule, FormsModule],
  exports: [NgxSpinnerModule, NgbModule, FormsModule],
})
export class SharedModule {}
