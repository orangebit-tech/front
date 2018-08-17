import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandardPageComponent } from './user/frontend/standard-page/standard-page.component';
import { SiteLayoutComponent } from './user/dashboard/site-layout/site-layout.component';

import { LoginComponent } from './user/frontend/login/login.component';
import { HomeComponent } from './user/frontend/home/home.component';
import { RegisterComponent } from './user/frontend/register/register.component';

import { UserDashboardComponent } from './user/dashboard/user-dashboard/user-dashboard.component';

const routes: Routes = [

//Site routes goes here 
    { 
        path: '', 
        component: StandardPageComponent,
        children: [
          { path:'home', component:HomeComponent },
		  { path: 'login', component:LoginComponent },
		  { path: 'register', component:RegisterComponent }
        ]
    },

 
  // App routes goes here here
    { 
        path: '',
        component: SiteLayoutComponent, 
        children: [
          { path: 'dashboard', component:UserDashboardComponent }
          
        ]
    },

 // otherwise redirect to home
    { path: '**', redirectTo: '' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 /*constructor(private router: Router) {}
ngOnInit() {
    this.router.navigate(['home']);
  }*/
}