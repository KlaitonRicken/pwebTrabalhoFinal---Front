import { MessageService } from 'primeng/api';
import { FuncionariosService } from './funcionarios.service';
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
import { FuncionariosCadastroComponent } from './funcionarios-cadastro/funcionarios-cadastro.component';

@NgModule({
  declarations: [FuncionariosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    FuncionariosCadastroComponent
  ],
  providers: [
    FuncionariosService,
    MessageService
  ]
})
export class FuncionariosModule { }
