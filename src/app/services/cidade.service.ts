import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  consultar(): Promise<any>{
    return this.http.get('http://localhost:3000/cidades')
    .toPromise()
    .catch(erro => {
      return Promise.reject('ERRO na consulta de cidades');
    });
  }

  adicionar(cidade: any): Promise<any>{
    return this.http.post('http://localhost:3000/cidades', cidade)
      .toPromise()
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar ${cidade.nome}`);
      });
  }

  excluir(id: number): Promise<unknown>{
    return this.http.delete(`http://localhost:3000/cidades/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir a cidade ${id}`);
      });
  }

  atulizar(cidade: any): Promise<any>{
    return this.http.put(`http://localhost:3000/cidades/${cidade.id}`, cidade )
        .toPromise()
        .catch(erro => {
          return Promise.reject(`Erro ao alterar a cidade ${cidade.id}`);
        });
  }
}
