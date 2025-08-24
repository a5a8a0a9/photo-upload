import { Component, input } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormsModule,
	ReactiveFormsModule,
} from '@angular/forms';
import { FormError } from '../form-error/form-error';
import { FormFieldLabel } from '../form-field-label/form-field-label';

const MODULE = [FormsModule, ReactiveFormsModule] as const;
const COMPONENT = [FormFieldLabel, FormError] as const;

@Component({
	selector: 'yo-form-field',
	imports: [MODULE, COMPONENT],
	templateUrl: './form-field.html',
	styleUrl: './form-field.scss',
})
export class FormField {
	label = input<string | null>('');

	required = input<boolean>(false);

	control = input<AbstractControl | FormControl>();
}
