import { AgendamentoService } from './agendamento/agendamento.service';
import { ServicoService } from './servico/servico.service';
import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { HorarioService } from './horario/horario.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';
import { MeusAgendamentosService } from './meus-agendamentos/meus-agendamentos.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroService } from './cadastro/cadastro.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppToolbarComponent,
    AgendamentoComponent,
    MeusAgendamentosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [AuthService, AuthGuard, HorarioService, ServicoService, AgendamentoService, MeusAgendamentosService, CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
