import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { MathsPage } from '../tab1/maths/maths.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab1/maths',
        loadComponent: () =>
          import('../tab1/maths/maths.page').then((m) => m.MathsPage),
      },
      {
        path: 'tab1/maths/accmaths',
        loadComponent: () =>
          import('../tab1/maths/accmaths/accmaths.page').then((m) => m.AccMathsPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
      path: 'tab4',
      loadComponent: () =>
        import('../tab4/tab4.page').then((m) => m.Tab4Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
