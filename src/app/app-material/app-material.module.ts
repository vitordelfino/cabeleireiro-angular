import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, DateAdapter, MD_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter } from '../date-picker/app-date-adapter';
import { APP_DATE_FORMATS } from '../date-picker/app-date-format';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule

  ],
  declarations: [],
  providers:[
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MD_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class AppMaterialModule { }
