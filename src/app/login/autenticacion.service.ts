import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment2 } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private protocolo: string = environment2.protocolo;
  private puerto: string = environment2.puerto;
  private hostname: string = environment2.hostname;
  private url: string = this.protocolo + "://" + this.hostname + ":" + this.puerto;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const urlServicio: string = this.url + "/usuarios";
    const filtro = {
      "offset": 0,
      "limit": 100,
      "skip": 0,
      "order": "string",
      "where": {
        "email": email,
        "contrasenia": password
      },
      "fields": {
        "id": true,
        "nombres": true,
        "apellidoPaterno": true,
        "apellidoMaterno": true,
        "email": true,
        "contrasenia": true,
        "rol": true
      }
    }
    let params = new HttpParams()
    .set("filter", JSON.stringify(filtro));

    return this.http.get(urlServicio, { params: params }).pipe(map((data: any) => {
      return data;
    }));
  }

  async verificarLogin(): Promise<boolean> {
    const token = sessionStorage.getItem("token");
    if(!token){
      console.log("No autorizado");
      return false;
    }
    return true;
  }
}
