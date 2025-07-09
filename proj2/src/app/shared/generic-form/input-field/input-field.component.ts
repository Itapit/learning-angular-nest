import { Component, inject, Input, OnInit } from '@angular/core';
import { FormFieldConfig } from '../interfaces/form-field-config';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: false,
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent implements OnInit{
  @Input() config!: FormFieldConfig;
  
  private readonly parent = inject(ControlContainer)

  get parentFormGroup(){
    return this.parent.control as FormGroup
  }

  ngOnInit() {
    const control = new FormControl(
      "",
      this.config.validators || []
    );
    this.parentFormGroup.addControl(this.config.name, control);
  }
}