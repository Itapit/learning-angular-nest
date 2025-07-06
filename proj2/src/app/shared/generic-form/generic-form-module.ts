import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { FieldListComponent } from './field-list/field-list.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GenericFormComponent,
    FieldListComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GenericFormComponent
  ]
})
export class GenericFormModule { }
