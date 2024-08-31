import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'sign-in', component: SignUpComponent},
    { path: 'home', component:HomeComponent},
];
