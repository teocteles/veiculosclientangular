import { Veiculo } from './veiculo';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Headers, URLSearchParams, RequestOptions } from '@angular/http';

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()
export class VeiculosService {

  constructor(
      private http:HttpClient
  ) {}

  getVeiculos() {
     return this.http.get(environment.urlAPI);
  }

  getVeiculo(id){
    return this.http.get(this.getVeiculoUrl(id));
  }

  addVeiculo(veiculo){
    return this.http.post(environment.urlAPI, veiculo);
  }

  updateVeiculo(veiculo){
    return this.http.put(this.getVeiculoUrl(veiculo.id), veiculo);
  }

  deleteVeiculo(id){
    return this.http.delete(environment.urlAPI + "/" +id);
  }

  private getVeiculoUrl(id){
    return environment.urlAPI + "/" + id;
  }

  /**
   * @returns {RequestOptions}
   */
  getAuthorizationHeader(): RequestOptions {
    // Just checking is this._options is null using lodash
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      return new RequestOptions({headers: headers});
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
