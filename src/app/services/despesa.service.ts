import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IDespesa } from '../interface/despesa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  endpoint = 'despesas'
  api = environment.api;
  constructor(private http: HttpClient) { }

  cadastrarDespesa(despesa: IDespesa) {
    return this.http.post<IDespesa>(`${this.api}/${this.endpoint}`, despesa);
  }

  retornarTodasAsDespesas() {
    return this.http.get<IDespesa[]>(`${this.api}/${this.endpoint}`);
  }

  buscarDespesaPorId(idDespesa: number) {
    return this.http.get<IDespesa>(`${this.api}/${this.endpoint}/${idDespesa}`, );
  }

  editarDespesa(idDespesa: number, despesa: IDespesa) {
    return this.http.put<IDespesa>(`${this.api}/${this.endpoint}/${idDespesa}`, despesa);
  }

  deletarDespesa(idDespesa: number) {
    return this.http.delete<IDespesa>(`${this.api}/${this.endpoint}/${idDespesa}`);
  }

  gerarRelatorioDespesas(dataInicio?: string, dataFim?: string): Observable<Blob> {
    let params = new HttpParams();
  if (dataInicio) {
    params = params.set('dataInicio', dataInicio);
  }
  if (dataFim) {
    params = params.set('dataFim', dataFim);
  }

  return this.http.get(`${this.api}/${this.endpoint}/relatorio`, {
    responseType: 'blob',
    params: params
  });
  }
}
