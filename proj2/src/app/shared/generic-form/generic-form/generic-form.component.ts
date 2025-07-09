import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../interfaces/form-field-config';
import { FieldType } from '../enums/field-type.enum';

@Component({
  selector: 'app-generic-form',
  standalone: false,
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css',
})
export class GenericFormComponent {
  @Input() fields: FormFieldConfig[] = [];
  @Output() submitted = new EventEmitter<any>();

  readonly FieldType = FieldType;
  
  form!: FormGroup;
  
  constructor(private readonly fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({})
  }

  onSubmit() {
    if (this.form.valid) this.submitted.emit(this.form.value);
    else this.form.markAllAsTouched();
  }
}