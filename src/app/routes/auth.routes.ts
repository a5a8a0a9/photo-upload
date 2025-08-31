import { Routes } from '@angular/router';

export const authRoutes: Routes = [
	{
		path: '',
		loadChildren: () => import('@features/auth/routes').then((m) => m.routes),
	},
];
