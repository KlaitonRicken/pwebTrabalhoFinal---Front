import { Funcionario } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {


  funcionariosURL = 'http://localhost:8080/funcionarios';
  urlFiltro;

  constructor(private http: HttpClient) {}

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/funcionarios/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/funcionarios';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.funcionariosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(funcionario: Funcionario): Promise<any>{
    return this.http.post(this.funcionariosURL, funcionario)
    .toPromise();
  }

  alterar(funcionario: Funcionario): Promise<any>{
    return this.http.put(this.funcionariosURL+'/'+funcionario.id, funcionario)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Funcionario> {
    return this.http.get<Funcionario>(this.funcionariosURL+'/'+codigo).toPromise();
  }
}
