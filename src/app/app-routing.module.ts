import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AhomePopulationComponent } from './ahome-population/ahome-population.component';
import { AhomeEconomicsComponent } from './ahome-economics/ahome-economics.component';

const routes: Routes = [
  // 默认去大屏
  {
    path: '',
    redirectTo:'/admin',
    pathMatch:'full'
  },
  // admin后台路由
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => {
      return m.AdminModule
    })
  },
  // 大屏路由
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'population',
    component: AhomePopulationComponent
  },
  {
    path: 'economics',
    component: AhomeEconomicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
