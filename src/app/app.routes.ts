import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/user-layout/user-layout.component').then((m) => m.UserLayoutComponent),
    children: [
      {
        path: '',
        // loadComponent: () =>
        //   import('./core/home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
];
