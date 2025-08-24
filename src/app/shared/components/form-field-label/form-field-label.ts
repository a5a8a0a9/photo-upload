import { Component, input } from '@angular/core';

@Component({
	selector: 'yo-form-field-label',
	imports: [],
	templateUrl: './form-field-label.html',
	styleUrl: './form-field-label.scss',
})
export class FormFieldLabel {
	label = input<string | null>(null);

	required = input<boolean>(false);
}
