import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { MessageService } from 'primeng/api';
import { Veiculo } from '../model';

@Component({
  selector: 'app-veiculos-cadastro',
  templateUrl: './veiculos-cadastro.component.html',
  styleUrls: ['./veiculos-cadastro.component.css']
})
export class VeiculosCadastroComponent implements OnInit {

veiculo = new Veiculo();

  constructor(
    private service: VeiculosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.veiculo)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Veiculos '+this.veiculo.marca+'/'+this.veiculo.marca+' cadastrado(a)'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoVeiculo = this.rota.snapshot.params['id'];
    if(codigoVeiculo){
      this.carregarVeiculo(codigoVeiculo);
    }
  }

  carregarVeiculo(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.veiculo = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.veiculo)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Veiculos '+this.veiculo.marca+'/'+this.veiculo.marca+' alterado(a)'});
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
    return Boolean(this.veiculo.id);
  }
}
