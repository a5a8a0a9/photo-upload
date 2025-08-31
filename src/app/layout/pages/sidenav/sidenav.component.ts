import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
	selector: 'yo-sidenav',
	imports: [MatSidenavModule],
	templateUrl: './sidenav.component.html',
	styleUrl: './sidenav.component.scss',
})
export class SidenavComponents {
	isOpened = true;
}
