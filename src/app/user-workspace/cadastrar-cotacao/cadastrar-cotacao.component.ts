import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cotacao } from 'src/app/shared/model/cotacao';
import { CadastrarCotacaoService } from 'src/app/shared/services/cadastrar-cotacao.service';
import {HttpClient} from '@angular/common/http';
import {MensagemService} from 'src/app/shared/services/message-service.service';
@Component({
  selector: 'app-cadastrar-cotacao',
  templateUrl: './cadastrar-cotacao.component.html',
  styleUrls: ['./cadastrar-cotacao.component.scss']
})
export class CadastrarCotacaoComponent implements OnInit {
  cotacao!: Cotacao;
  cadastroFlag !: boolean;
  array_cotacao!: Array<Cotacao>;
  aviso!: string;
  constructor(private httpClient: HttpClient,private cadastroService: CadastrarCotacaoService, private mensagemService: MensagemService ) {

    this.cotacao = new Cotacao();
    this.cadastroFlag = true;
    this.cadastroService.listar().subscribe(
      resposta => {this.array_cotacao = resposta;}
    );

  }

  ngOnInit(): void {
    this.cotacao = new Cotacao();

  }


  inserirCotacao(): void {
    this.cadastroService.listar().subscribe(
      resposta => {this.array_cotacao = resposta;}
    );
      console.log(this.array_cotacao);
    for(let x of this.array_cotacao){
      if(x.urlMoeda === this.cotacao.urlMoeda){

        this.cadastroFlag = false;
        break;
      }
    }
    if (!this.cotacao.id && this.cadastroFlag ==true ) {
      console.log(this.cotacao.urlMoeda);
      this.httpClient.get<any>(`https://economia.awesomeapi.com.br/json/last/${this.cotacao.urlMoeda}`).subscribe(res => {

        var separe = this.cotacao.urlMoeda.split('-');
        var str = separe[0].concat("",separe[1]);

        console.log(`AQUIII -> ${separe[0]}`);
        this.cotacao.bid = res[str].bid;
        this.cotacao.ask = res[str].ask;
        this.cotacao.code = res[str].code;
        this.cotacao.createDate = res[str].create_date;

        this.cotacao.codein = res[str].codein;
        console.log(this.cotacao.code)
        this.cotacao.pctChange = res[str].pctChange;
        if(this.cotacao.code != null){
          const  new_cotacao = this.cotacao;
          console.log(new_cotacao.bid);
          this.cadastroService.inserir(new_cotacao).subscribe(
            cotacaoInserido => {
              this.mensagemService.success("Cotacao inserida com sucesso!");
              console.log(cotacaoInserido);

            }
          );
          }else{
            this.mensagemService.error("Essa cotacao não existe!");
          }

      });
     }else{
      this.aviso = `${this.cotacao.urlMoeda} já cadastrado!`
      this.mensagemService.warning(this.aviso);
    this.cadastroFlag = true;
  }
  }

}
