import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface AuthField {
  name: string;
  label: string;
  type: string;
  validators?: any[];
}

@Component({
  selector: 'auth-form',
  standalone: false,
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent implements OnInit{
  @Input() title!: string;
  @Input() fields: AuthField[] = [];
  @Input() buttonLabel = 'Submit';
  @Output() submitForm = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const controlsConfig = this.fields.reduce((cfg, f) => {
      cfg[f.name] = ['', f.validators || []];
      return cfg;
    }, {} as Record<string, any[]>);
    this.form = this.fb.group(controlsConfig);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }
}
