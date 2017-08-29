import { AgendamentoComponent } from './agendamento/agendamento.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
const appRoutes: Routes = [
    { path: '', component: AgendamentoComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'agendamento', component: AgendamentoComponent,  canActivate: [AuthGuard] }
];

export const routing = RouterModule.forRoot(appRoutes);
