import { Routes } from '@angular/router';
import { ROUTES } from './routes';
import { HomeComponent } from '../pages/home/home.component';
import { ViewPageComponent } from '../pages/view-page/view-page.component';
import { FormPageComponent } from '../pages/form-page/form-page.component';

export const appRouter: Routes = [
    {
        path: ROUTES.HOME,
        component: HomeComponent,
    },
    {
        path: `${ROUTES.USER}/:id`,
        component: ViewPageComponent,
    },
    {
        path: `${ROUTES.ADD_USER}`,
        component: FormPageComponent,
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
