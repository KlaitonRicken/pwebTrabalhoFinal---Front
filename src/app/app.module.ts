import { UtilizacoesPesquisaComponent } from './utilizacoes/utilizacoes-pesquisa/utilizacoes-pesquisa.component';
import { UtilizacoesCadastroComponent } from './utilizacoes/utilizacoes-cadastro/utilizacoes-cadastro.component';
import { UtilizacoesModule } from './utilizacoes/utilizacoes.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { FuncionariosCadastroComponent } from './funcionarios/funcionarios-cadastro/funcionarios-cadastro.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VeiculosCadastroComponent } from './veiculos/veiculos-cadastro/veiculos-cadastro.component';

const rotas: Routes = [
  // {path: '', redirectTo:'utilizacoes',pathMatch:'full'},
  {path: 'funcionarios/novo', component: FuncionariosCadastroComponent},
  {path: 'funcionarios/:id', component: FuncionariosCadastroComponent},
  //{path: 'veiculos', component: VeiculosPesquisaComponent},
  {path: 'veiculos/novo', component: VeiculosCadastroComponent},
  {path: 'veiculos/:id', component: VeiculosCadastroComponent},
  {path: 'utilizacoes/novo', component: UtilizacoesCadastroComponent},
  {path: 'utilizacoes/:id', component: UtilizacoesCadastroComponent},
  {path: 'utilizacoes', component: UtilizacoesPesquisaComponent}

];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FuncionariosModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    SidebarModule,
    ButtonModule,
    DropdownModule,
    VeiculosModule,
    UtilizacoesModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
