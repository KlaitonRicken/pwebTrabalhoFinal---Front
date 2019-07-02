import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UtilizacoesService } from './../utilizacoes.service';
import { Utilizacao } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-utilizacoes-cadastro',
  templateUrl: './utilizacoes-cadastro.component.html',
  styleUrls: ['./utilizacoes-cadastro.component.css']
})
export class UtilizacoesCadastroComponent implements OnInit {

  utilizacao = new Utilizacao();
  veiculos = [];
  funcionarios = [];

  inserir(form: FormControl) {
    this.service.adicionar(this.utilizacao)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Utilização cadastrada'});
      form.reset();
    });
  }

  constructor(
    private service: UtilizacoesService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarVeiculos();
    this.pesquisarFuncionarios();
    const codigoUtilizacao = this.rota.snapshot.params['id'];
    if(codigoUtilizacao){
      this.carregarUtilizacao(codigoUtilizacao);
    }
  }

  carregarUtilizacao(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.utilizacao = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.utilizacao)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Utilização alterada'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.utilizacao.id);
  }

  pesquisarVeiculos(){
    this.service.listarVeiculos().
    then((dados)=>{
      this.veiculos=dados.
      map(e =>({label: e.marca +'/'+ e.modelo, value: e.id}));
    });
  }

  pesquisarFuncionarios(){
    this.service.listarFuncionarios().
    then((dados)=>{
      this.funcionarios=dados.
      map(e =>({label: e.nome, value: e.id}));
    });
  }
}
