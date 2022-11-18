import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastrarFilmes, CriarUsuario } from '../models/salvar-usuario.model';
@Injectable({
  providedIn: 'root'
})
export class cadastrarFilmes {
  private listaFilmes!: cadastrarFilmes[]
  private url = 'http://localhost:3000/filmes'
  constructor(private httpClient: HttpClient) {
    this.listaFilmes = [];
  }
  get filmes() {
    return this.listaFilmes;
  }
  lerFilmes(): Observable<cadastrarFilmes[]> {
    return this.httpClient.get<cadastrarFilmes[]>(this.url);
  }
  salvarFilmes(filmes: cadastrarFilmes): Observable<cadastrarFilmes[]> {
    return this.httpClient.post<cadastrarFilmes[]>(this.url, filmes);
  }
  deleteFilmes(idfilmes:any):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${idfilmes}`);
 }
}