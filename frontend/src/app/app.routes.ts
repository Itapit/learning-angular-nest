import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth';
import { SigninComponent } from './components/signin/signin';
import { SignupComponent } from './components/signup/signup';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => {
            return import('./home/home').then(
                m => m.HomeComponent
            )
        }
    },
    {
        path: '',
        component: AuthComponent,
        children: [
            {path:'', redirectTo: 'signin', pathMatch: 'full'},
            {path:'signin', component:SigninComponent},
            {path:'signup', component:SignupComponent}
        ]
    }
];