import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { Tab2ChatroomDetailsComponent } from './shared/chatroom/tab2chatroomdetails/tab2chatroomdetails.component';
import { Tab4ChatroomDetailsComponent } from './shared/chatroom/tab4chatroomdetails/tab4chatroomdetails.component';
import { Tab3ChatroomDetailsComponent } from './shared/chatroom/tab3chatroomdetails/tab3chatroomdetails.component';
import { Tab1ChatroomDetailsComponent } from './shared/chatroom/tab1chatroomdetails/tab1chatroomdetails.component';
 
export const routes: Routes = [
	{
		path: 'login',
		loadComponent: () => import('./authentication/loginpage.component').then((m) => m.LoginPage),
		
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
  path: 'tab1mathsaccmathschatroom/:id',
  component: Tab1ChatroomDetailsComponent,
},
{
  path: 'tab2chatroom/:id',
  component: Tab2ChatroomDetailsComponent,
},
{
  path: 'tab3chatroom/:id',
  component: Tab3ChatroomDetailsComponent,
},
{
  path: 'tab4chatroom/:id',
  component: Tab4ChatroomDetailsComponent,
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