import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('../app/components/shell/shell-component/shell-component').then(
        (m) => m.ShellComponent
      ),
      children: [
         {
    path: 'home',
    loadComponent: () =>
      import('../app/components/home/home/home').then(
        (m) => m.Home
      ),
  },

  {
    path: 'projects',
    loadComponent: () =>
      import('../app/components/projects/projects/projects').then(
        (m) => m.Projects
      ),
  },


  {
    path: 'aboutme',
    loadComponent: () =>
      import('../app/components/about-me/about-me/about-me').then(
        (m) => m.AboutMe
      ),
  },
      ]
  },

];
