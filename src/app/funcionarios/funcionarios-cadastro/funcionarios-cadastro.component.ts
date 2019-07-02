import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FuncionariosService } from './../funcionarios.service';
import { Funcionario } from './../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-cadastro',
  templateUrl: './funcionarios-cadastro.component.html',
  styleUrls: ['./funcionarios-cadastro.component.css']
})
export class FuncionariosCadastroComponent implements OnInit {

  funcionario = new Funcionario();

  constructor(
    private service: FuncionariosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.funcionario)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Funcionario(a) '+this.funcionario.nome+' cadastrado(a)'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoFuncionario = this.rota.snapshot.params['id'];
    if(codigoFuncionario){
      this.carregarFuncionario(codigoFuncionario);
    }
  }

  carregarFuncionario(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.funcionario = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.funcionario)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Funcionario(a) '+this.funcionario.nome+' alterado(a)'});
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
    return Boolean(this.funcionario.id);
  }



}
