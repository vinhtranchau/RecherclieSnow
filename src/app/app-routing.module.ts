import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { heroRoute } from './core/routes/hero-route';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { absolutePath } from './core/utils/route.util';

const routes: Routes = [
  {
    path: '',
    redirectTo: absolutePath([heroRoute.dashboard]),
    pathMatch: 'full'
  },
  {
    path: heroRoute.dashboard,
    component: DashboardComponent
  },
  {
    path: heroRoute.heroes,
    component: HeroesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
