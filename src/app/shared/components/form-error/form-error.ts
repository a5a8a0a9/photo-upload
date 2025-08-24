import { Component, input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
	selector: 'yo-form-error',
	imports: [],
	templateUrl: './form-error.html',
	styleUrl: './form-error.scss',
})
export class FormError {
	control = input<AbstractControl | FormControl>();
}
