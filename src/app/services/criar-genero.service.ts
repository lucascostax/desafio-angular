import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastrarFilmes, CriarGenero, CriarUsuario } from '../models/salvar-usuario.model';
@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  editargenero(genero: CriarGenero) {
    throw new Error('Method not implemented.');
  }
  private listaGeneros!: CriarGenero[]
  private url = 'http://localhost:3000/genero'
  constructor(private httpClient: HttpClient) {
    this.listaGeneros = [];
  }
  get filmes() {
    return this.listaGeneros;
  }
  lerGenero(): Observable<CriarGenero[]> {
    return this.httpClient.get<CriarGenero[]>(this.url);
  }
  salvarGenero(genero: CriarGenero): Observable<CriarGenero[]> {
    return this.httpClient.post<CriarGenero[]>(this.url, genero);
  }
  deleteGeneros(idgenero:any):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${idgenero}`);
 }
 
 editarGenero(idUsuario:CriarGenero):Observable<CriarGenero>{
  return this.httpClient.put<CriarGenero>(`${this.url}/${idUsuario.id}`, idUsuario)
 }
}