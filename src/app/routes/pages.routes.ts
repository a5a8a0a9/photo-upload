import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: 'dashboard',
		loadChildren: () =>
			import('@features/dashboard/routes').then((m) => m.routes),
	},
	{
		path: 'errors',
		loadChildren: () => import('@features/errors/routes').then((m) => m.routes),
	},
	{
		path: '**',
		redirectTo: 'errors/404',
	},
];
