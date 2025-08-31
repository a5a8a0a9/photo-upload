import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
	selector: 'yo-pages',
	imports: [RouterOutlet, HeaderComponent],
	templateUrl: './pages.layout.html',
	styleUrl: './pages.layout.scss',
})
export class PagesLayout {}
