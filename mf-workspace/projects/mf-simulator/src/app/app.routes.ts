import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./default/default.component").then((m) => m.DefaultComponent)
    },
    {
        path: 'simulator',
        loadComponent: () => import("./simulator/simulator.component").then((m) => m.SimulatorComponent)
    }
];
