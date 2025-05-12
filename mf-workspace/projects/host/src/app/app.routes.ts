import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'mf-simulator',
        loadChildren: () => import('mf-simulator/AppComponent').then((m) => m.AppComponent)
    }
];
