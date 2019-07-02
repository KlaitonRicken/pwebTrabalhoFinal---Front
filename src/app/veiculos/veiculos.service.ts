import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from './model';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  veiculosURL = 'http://localhost:8080/veiculos';
  urlFiltro;

  constructor(private http: HttpClient) {}

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/veiculos/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/veiculos';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.veiculosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(veiculo: Veiculo): Promise<any>{
    return this.http.post(this.veiculosURL, veiculo)
    .toPromise();
  }

  alterar(veiculo: Veiculo): Promise<any>{
    return this.http.put(this.veiculosURL+'/'+veiculo.id, veiculo)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Veiculo> {
    return this.http.get<Veiculo>(this.veiculosURL+'/'+codigo).toPromise();
  }
}
