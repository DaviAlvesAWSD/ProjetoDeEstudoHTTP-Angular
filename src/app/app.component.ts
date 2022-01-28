import { Component, OnInit } from '@angular/core';
import { CidadeService } from './services/cidade.service';

interface Cidade {
  id: number,
  nome: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  cidades: Cidade[] = [ ];


  constructor(private cidadeService: CidadeService){}

  ngOnInit(){
    this.consultar();
  }

  consultar(){
    this.cidadeService.consultar()
    .then(cidades => {
      this.cidades = cidades;
      console.log(this.cidades);
    })
    .catch(erro =>{
      alert(erro);
    });
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({nome})
      .then(cidade => {
        alert(`Cidade "${cidade.nome}" adicionada com o código "${cidade.id}!"`);
        this.consultar();
      })
      .catch(erro =>{
        alert(erro);
      });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
      .then(() =>{
        alert('Cidade excluida com sucesso!');
        this.consultar();
      })
      .catch(erro =>{
        alert(erro);
      });
  }

  atualizar(cidade: any) {
    this.cidadeService.atulizar(cidade)
    .then(() => {
      alert('Cidade alterada com sucesso!');
      // this.consultar();
    })
    .catch(erro =>{
      alert(erro);
    });
  }

}
