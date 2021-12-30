import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Cotacao } from '../model/cotacao';

@Injectable({
  providedIn: 'root'
})
export class CotacaoFirestoreService {

 colecaoCotacoes: AngularFirestoreCollection<Cotacao>;
 NOME_COLECAO = 'cotacao';

 constructor(private afs: AngularFirestore) {
   this.colecaoCotacoes = afs.collection(this.NOME_COLECAO);
 }

 listar(): Observable<Cotacao[]> {
   // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
   return this.colecaoCotacoes.valueChanges({idField: 'id'});
 }

 inserir(cotacao: Cotacao): Observable<object> {
   // removendo id pois ele está undefined, já que um novo usuário


   // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
   // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
   return from(this.colecaoCotacoes.add(Object.assign({}, cotacao)));
 }

 remover(id: string): Observable<void> {
   return from(this.colecaoCotacoes.doc(id).delete());
 }
/*
 pesquisarPorId(id: string): Observable<Cotacao> {
   // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um ///document
   //  para o tipo usuário
   return this.colecaoCotacoes.doc(id).get().pipe(map((document) => {new Cotacao(document.id, document.data())}));
 }*/

}
