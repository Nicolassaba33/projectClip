import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  autorizar:boolean;
  Usuarios: any;

  constructor(private _http : HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/users"

  getUsuarios(){
    return this._http.get(this.url)
  }

}