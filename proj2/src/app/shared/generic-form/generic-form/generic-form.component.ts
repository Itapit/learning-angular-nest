import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormFieldConfig } from '../interfaces/form-field-config';

@Component({
  selector: 'app-generic-form',
  standalone: false,
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class GenericFormComponent {
  @Input() fields: FormFieldConfig[] = [];
  @Output() submitted = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  onSubmit() {
    if (this.form.valid) this.submitted.emit(this.form.value);
    else this.form.markAllAsTouched();
  }
}