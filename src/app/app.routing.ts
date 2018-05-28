import { Routes, RouterModule } from '@angular/router';
 
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './_guards/auth.guard';
 
const appRoutes: Routes = [
    { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);