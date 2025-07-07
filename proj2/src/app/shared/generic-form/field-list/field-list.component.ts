import { Component, Input } from '@angular/core';
import { FormFieldConfig } from '../interfaces/form-field-config';
import { FieldType } from '../enums/field-type.enum';

@Component({
  selector: 'app-field-list',
  standalone: false,
  templateUrl: './field-list.component.html',
  styleUrl: './field-list.component.css'
})
export class FieldListComponent {
  @Input() config: FormFieldConfig[] = [];
  readonly FieldType = FieldType;
}
