import { AgendamentoComponent } from './agendamento/agendamento.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';
const appRoutes: Routes = [
    { path: '', component: AgendamentoComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'agendamento', component: AgendamentoComponent,  canActivate: [AuthGuard] },
    { path: 'meus-agendamentos', component: MeusAgendamentosComponent,  canActivate: [AuthGuard] }
];

export const routing = RouterModule.forRoot(appRoutes);
