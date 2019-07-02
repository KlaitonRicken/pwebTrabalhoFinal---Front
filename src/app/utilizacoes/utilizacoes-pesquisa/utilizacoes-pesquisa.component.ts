import { Utilizacao } from './../model';
import { Component, OnInit } from '@angular/core';
import { UtilizacoesService } from '../utilizacoes.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-utilizacoes-pesquisa',
  templateUrl: './utilizacoes-pesquisa.component.html',
  styleUrls: ['./utilizacoes-pesquisa.component.css']
})
export class UtilizacoesPesquisaComponent implements OnInit {

  utilizacoes = [];

  dataBusca: string;

  constructor(
    private service:UtilizacoesService,
    private msg:MessageService,
    private conf: ConfirmationService
  ) { }

  pesquisar(){
    this.service.pesquisar({data:this.dataBusca})
    .then((dados)=>{
      this.utilizacoes=dados;
    });
  }

ngOnInit() {
  this.pesquisar();
}

confirmarExclusao(utilizacao:any){
  this.conf.confirm({
    message: 'Tem certeza que deseja excluir está utilização - data:'+utilizacao.data+', hora:'+utilizacao.hora+', Funcionário:'+utilizacao.nomeFuncionario+', Veículo:'+utilizacao.veiculo+'?',
    accept: () => {
      this.excluir(utilizacao);
    }
  });
}

excluir(utilizacao: any){
  this.service.excluir(utilizacao.id)
  .then(()=>{
    this.pesquisar();
    this.msg.add({severity:'success', summary:'Exclusão', detail:'Utilização - data:'+utilizacao.data+', hora:'+utilizacao.hora+', Funcionário:'+utilizacao.nomeFuncionario+', Veículo:'+utilizacao.veiculo+' excluída'});
  });
}

}
