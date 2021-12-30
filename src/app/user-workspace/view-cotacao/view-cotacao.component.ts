import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Cotacao } from '../../shared/cotacao';
import { Observable } from 'rxjs';
import { Cotacao } from 'src/app/shared/model/cotacao';
//import { CotacaoService } from '../shared/services/cotacao.service';
import { isDefined } from '@angular/compiler/src/util';
import { CadastrarCotacaoService } from 'src/app/shared/services/cadastrar-cotacao.service';
import { Router } from '@angular/router';
import { CotacaoFirestoreService } from 'src/app/shared/services/cotacao-firestore.service';
@Component({
  selector: 'app-view-cotacao',
  templateUrl: './view-cotacao.component.html',
  styleUrls: ['./view-cotacao.component.scss']
})

export class ViewCotacaoComponent implements OnInit {

  cotacoesMoney!: Array<Cotacao>;
  cotacoes_to_print!:Array<any>;
  constructor(private httpClient: HttpClient, private cadastroService: CadastrarCotacaoService,  private roteador: Router ) {

  this.cotacoes_to_print = new Array<any>();
  this.cotacoesMoney = new Array<Cotacao>();
   }
  ngOnInit() {
   this.cadastroService.listar().subscribe(
     cotacoes => {this.cotacoesMoney = cotacoes;}

   )

    console.log(this.cotacoesMoney);
    for(let x of this.cotacoesMoney){
    console.log(x.urlMoeda);
    this.httpClient.get<any>(`https://economia.awesomeapi.com.br/json/last/${x.urlMoeda}`).subscribe(
      res=>{

        let separe = x.urlMoeda.split('-');
        console.log(`AQUIII -> ${separe[0]}`);
        let str = separe[0].concat("",separe[1]);
        x.bid = res[str].bid;
        x.ask = res[str].ask;
        x.code = res[str].code;
        x.createDate = res[str].create_date;
        x.codein = res[str].codein;
      x.pctChange = res[str].pctChange;

    }
    )

  }


   };







  remover(cotacao: Cotacao): void {
    console.log(cotacao);
    this.cadastroService.remover(cotacao.id).subscribe(
      resposta => {
        const cotacaoToDelete = this.cotacoesMoney.findIndex(u => u.urlMoeda === cotacao.urlMoeda);
        if (cotacaoToDelete > -1) {
          this.cotacoesMoney.splice(cotacaoToDelete, 1);
        }
      }
    );
    }

  get_moeda(): void{
    this.cotacoes_to_print= new Array<any>();
    console.log(this.cotacoesMoney);
    for(let x of this.cotacoesMoney){
    console.log(x.urlMoeda);
    this.httpClient.get<any>(`https://economia.awesomeapi.com.br/json/last/${x.urlMoeda}`).subscribe(
      res=>{
        /*
        let separe = x.urlMoeda.split('-');
        console.log(separe);
        let str = separe[0].concat("",separe[1]);
        console.log(str);
        this.cotacoes_to_print.push(response[str]);
        console.log(response[str]);
        */
        let separe = x.urlMoeda.split('-');
        let str = separe[0].concat("",separe[1]);
        x.bid = res[str].bid;
        x.ask = res[str].ask;
        x.code = res[str].code;
        x.createDate = res[str].create_date;
        x.codein = res[str].codein;
        x.pctChange = res[str].pctChange;
        this.cadastroService.inserir(x).subscribe(
          cotacaoInserido => {
            console.log(cotacaoInserido);

          }
        );
    }
    )
  }
  }
  }
