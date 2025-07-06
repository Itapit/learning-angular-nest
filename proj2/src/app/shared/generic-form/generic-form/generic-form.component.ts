import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../form-field-config';

@Component({
  selector: 'app-generic-form',
  standalone: false,
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css'
})
export class GenericFormComponent {
  @Input() config: FormFieldConfig[] = [];
  @Output() submitted = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const groupDef = this.config.reduce((g, f) => {
      g[f.name] = ['', f.validators || []];
      return g;
    }, {} as Record<string, any[]>);
    this.form = this.fb.group(groupDef);
  }

  onSubmit() {
    if (this.form.valid) this.submitted.emit(this.form.value);
    else this.form.markAllAsTouched();
  }
}