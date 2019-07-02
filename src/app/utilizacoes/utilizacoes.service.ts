import { Utilizacao } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilizacoesService {

  utilizacoesURL = 'http://localhost:8080/utilizacoes';

  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.data){
      this.urlFiltro = 'http://localhost:8080/utilizacoes/filtro?data='+filtro.data;
    }else{
      this.urlFiltro = 'http://localhost:8080/utilizacoes';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.utilizacoesURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(utilizacao: Utilizacao): Promise<any>{
    return this.http.post(this.utilizacoesURL, utilizacao)
    .toPromise();
  }

  alterar(utilizacao: Utilizacao): Promise<any>{
    return this.http.put(this.utilizacoesURL+'/'+utilizacao.id, utilizacao)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Utilizacao> {
    return this.http.get<Utilizacao>(this.utilizacoesURL+'/'+codigo).toPromise();
  }

  listarVeiculos(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/veiculos').toPromise();
  }

  listarFuncionarios(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/funcionarios').toPromise();
  }

}
