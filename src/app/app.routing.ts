import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
    {path: '', component: AuthComponent},
    {path: 'companies', component: AppComponent},
]

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes)
    