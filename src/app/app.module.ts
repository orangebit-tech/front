import { ICOComponent } from './user/frontend/ICO/ico.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './user/frontend/includes/header/header.component';
import { FooterComponent } from './user/frontend/includes/footer/footer.component';
import { TeamComponent } from './user/frontend/team/team.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/frontend/login/login.component';
import { RegisterComponent } from './user/frontend/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { StandardPageComponent } from './user/frontend/standard-page/standard-page.component';
import { HomeComponent } from './user/frontend/home/home.component';

import { UserDashboardComponent } from './user/dashboard/user-dashboard/user-dashboard.component';
import { MiningComponent } from './user/dashboard/mining/mining.component';
import { OrderComponent } from './user/dashboard/order/order.component';
import { BalanceComponent } from './user/dashboard/balance/balance.component';
import { CoinComponent } from './user/dashboard/coin/coin.component';
import { StatisticsComponent } from './user/dashboard/statistics/statistics.component';
import { SettingComponent } from './user/dashboard/setting/setting.component';
import { FaqComponent } from './user/dashboard/faq/faq.component';

import { SidebarComponent } from './user/dashboard/shared/sidebar/sidebar.component';
import { UserHeaderComponent } from './user/dashboard/shared/user-header/user-header.component';
import { SiteLayoutComponent } from './user/dashboard/site-layout/site-layout.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ICOComponent,
    TeamComponent,
    LoginComponent,
    RegisterComponent,
    StandardPageComponent,
    HomeComponent,
    UserDashboardComponent,
    MiningComponent,
    OrderComponent,
    BalanceComponent,
    CoinComponent,
    StatisticsComponent,
    SettingComponent,
    FaqComponent,
    SidebarComponent,
    UserHeaderComponent, SiteLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
