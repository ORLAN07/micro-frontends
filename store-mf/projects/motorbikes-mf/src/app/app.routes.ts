import { Routes } from '@angular/router';

export const routes: Routes = [];

export const motorbikesRoutes: Routes = [
  {
    path: "",
    loadComponent: () => import("./app.component").then(c => c.AppComponent)
  }
];
