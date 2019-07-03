import { VeiculosService } from './../veiculos/veiculos.service';
import { FuncionariosService } from './../funcionarios/funcionarios.service';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilizacoesCadastroComponent } from './utilizacoes-cadastro/utilizacoes-cadastro.component';
import { UtilizacoesService } from './utilizacoes.service';
import { UtilizacoesPesquisaComponent } from './utilizacoes-pesquisa/utilizacoes-pesquisa.component';

@NgModule({
  declarations: [UtilizacoesCadastroComponent, UtilizacoesPesquisaComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule,
    DropdownModule,
    ButtonModule

  ],
  exports: [
    UtilizacoesCadastroComponent,
    UtilizacoesPesquisaComponent
  ],
  providers: [
    UtilizacoesService,
    VeiculosService,
    FuncionariosService,
    MessageService
  ]

})
export class UtilizacoesModule { }
