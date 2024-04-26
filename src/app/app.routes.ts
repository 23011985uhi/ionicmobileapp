import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { ChatroomDetailsComponent } from './shared/chatroom/chatroomdetails.component';

//export const routes: Routes = [
  //{
   // path: '',
   // loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
 // },
  
//];

 export const routes: Routes = [
	{
		path: 'login',
		loadComponent: () => import('./authentication/loginpage.component').then((m) => m.LoginPage),
		//canLoad: [IntroGuard, AutoLoginGuard] // Check if we should show the introduction or forward to inside
	},
  {
    path: 'signup',
    loadComponent: () => import('./authentication/signuppage.component').then((m) => m.SignupPage)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full', // Redirect to login if the path is empty
},
{
  path: 'chatroom/:id',
  component: ChatroomDetailsComponent,
},
	{
    path: 'tabs',
    component: TabsPage,
    children: [
     
      {
        path: 'tab1',
        loadComponent: () =>
          import('./tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab1/maths',
        loadComponent: () =>
          import('./tab1/maths/maths.page').then((m) => m.MathsPage),
      },
      {
        path: 'tab1/maths/accmaths',
        loadComponent: () =>
          import('./tab1/maths/accmaths/accmaths.page').then((m) => m.AccMathsPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('./tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('./tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
      path: 'tab4',
      loadComponent: () =>
        import('./tab4/tab4.page').then((m) => m.Tab4Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
     },
    ],
  },
	
	
];