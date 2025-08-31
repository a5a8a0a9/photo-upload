import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'auth',
		loadComponent: () =>
			import('@layout/auth/auth.layout').then((m) => m.AuthLayout),
		loadChildren: () => import('@routes/auth.routes').then((m) => m.authRoutes),
	},
	{
		path: 'pages',
		loadComponent: () =>
			import('@layout/pages/pages.layout').then((m) => m.PagesLayout),
		loadChildren: () =>
			import('@routes/pages.routes').then((m) => m.pagesRoutes),
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'pages',
	},
	{
		path: '**',
		redirectTo: 'auth',
	},
];
