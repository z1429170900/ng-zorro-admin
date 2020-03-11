import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AdminRoutingModule } from './admin-routing.module';

// component
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { PopulationComponent } from './population/population.component';
import { BuildComponent } from './build/build.component';

// service
import { NgServiceService } from './services/ng-service/ng-service.service';
import { NgEventService } from './services/ng-event/ng-event.service';
import { CrumbsComponent } from './components/crumbs/crumbs.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SideMenuComponent,
    HomeComponent,
    CrumbsComponent,
    PopulationComponent,
    BuildComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroAntdModule
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    NgServiceService,
    NgEventService
  ]
})

export class AdminModule { }
