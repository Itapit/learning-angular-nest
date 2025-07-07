import { Component, Input } from '@angular/core';
import { FormFieldConfig } from '../interfaces/form-field-config';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: false,
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
    viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class InputFieldComponent {
  @Input() config!: FormFieldConfig;
}
