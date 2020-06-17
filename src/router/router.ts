import { Routes } from '@angular/router';
import { ROUTES } from './routes';
import { HomeComponent } from '../pages/home/home.component';

export const appRouter: Routes = [
    {
        path: ROUTES.HOME,
        component: HomeComponent,
    },
    {
      path: '',
      redirectTo: ROUTES.HOME,
      pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: ROUTES.HOME,
    },
];
