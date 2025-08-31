import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '401',
		loadComponent: () =>
			import('./unauthorized/unauthorized.page').then(
				(m) => m.UnauthorizedPage,
			),
	},
	{
		path: '404',
		loadComponent: () =>
			import('./not-found/not-found.page').then((m) => m.NotFoundPage),
	},
	{
		path: '500',
		loadComponent: () =>
			import('./server-error/server-error.page').then((m) => m.ServerErrorPage),
	},
];
