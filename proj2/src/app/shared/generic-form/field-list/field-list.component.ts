import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../interfaces/form-field-config';

@Component({
  selector: 'app-field-list',
  standalone: false,
  templateUrl: './field-list.component.html',
  styleUrl: './field-list.component.css'
})
export class FieldListComponent {
  @Input() config: FormFieldConfig[] = [];
  @Input() group!: FormGroup;
}
