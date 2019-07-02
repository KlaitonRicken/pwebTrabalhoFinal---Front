import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosCadastroComponent } from './veiculos-cadastro/veiculos-cadastro.component';
import { VeiculosService } from './veiculos.service';

@NgModule({
  declarations: [VeiculosCadastroComponent],
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
    VeiculosCadastroComponent
  ],
  providers: [
    VeiculosService,
    MessageService
  ]

})
export class VeiculosModule { }
