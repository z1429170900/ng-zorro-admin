import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// my-component
import { HomeComponent } from './home/home.component';
import { AhomePopulationComponent } from './ahome-population/ahome-population.component';
import { AhomeEconomicsComponent } from './ahome-economics/ahome-economics.component';

// my-module
import { appComponentsModule } from './components/index';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// my-services
import { CommonService } from './services/common.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AhomePopulationComponent,
    AhomeEconomicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appComponentsModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    CommonService,
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
