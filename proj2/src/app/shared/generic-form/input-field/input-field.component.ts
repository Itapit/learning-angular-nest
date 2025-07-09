import { Component, Host, inject, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { FormFieldConfig } from '../interfaces/form-field-config';
import { AbstractControl, ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: false,
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
    viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class InputFieldComponent implements OnInit{
  @Input() config!: FormFieldConfig;
  
  private container = inject(ControlContainer)

  get containerFormGroup(){
    return this.container.control as FormGroup
  }

  ngOnInit() {
    const parentForm = this.containerFormGroup;
    const control = new FormControl(
      "",
      this.config.validators || []
    );
    parentForm.addControl(this.config.name, control);
  }

  get control(): AbstractControl {
    return (this.container.control as FormGroup).get(this.config.name)!;
  }
}