import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ianimes } from './ianimes';
import { Ianime } from './ianime';
import { Ivideos } from './ivideos';
import { map } from 'rxjs/operators';

@Injectable()
export class AnimesService {
  private protocolo: string = environment.protocolo;
  private hostname: string = environment.hostname;
  private url: string = this.protocolo + "://" + this.hostname;

  constructor(private http: HttpClient) { }

  obtenerAnimes(): Observable<Ianimes> {
    // const recurso: string = environment.recursoBusqueda + environment.recursoAnime;
    const recurso: string = environment.recursoAnime;
    const urlServicio: string = this.url + recurso;

    let params = new HttpParams()
    .set("q", "")
    .set("page","1")
    .set("order_by","score")
    .set("sort","desc");

    let headers = new HttpHeaders()
    .set("Access-Control-Allow-Origin", "*")
    .set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS, PUT")
    .set("Access-Control-Allow-Headers", "append,delete,entries,foreach,get,has,keys,set,values,Authorization");

    return this.http.get(urlServicio, {headers:headers ,params: params}).pipe(map((data: Ianimes) => {
      return data;
    }));
  }
  obtenerDetalle(id: string): Observable<Ianime> {
    const recurso: string = environment.recursoAnime;
    const urlServicio: string = this.url + recurso + "/" + id;

    let headers = new HttpHeaders()
    .set("Access-Control-Allow-Origin", "*")
    .set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS, PUT")
    .set("Access-Control-Allow-Headers", "append,delete,entries,foreach,get,has,keys,set,values,Authorization");

    return this.http.get(urlServicio,{headers:headers}).pipe(map((data: Ianime) => {
      return data;
    }));
  }

  obtenerVideos(id: string, page: string): Observable<Ivideos> {
    const recurso: string = environment.recursoAnime;
    const urlServicio: string = this.url + recurso + "/" + id + "/" + "videos" + "/" + "episodes";

    let params = new HttpParams()
    .set("page",page)

    let headers = new HttpHeaders()
    .set("Access-Control-Allow-Origin", "*")
    .set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS, PUT")
    .set("Access-Control-Allow-Headers", "append,delete,entries,foreach,get,has,keys,set,values,Authorization");

    return this.http.get(urlServicio,{headers:headers,params: params}).pipe(map((data: Ivideos) => {
      return data;
    }));
  }
  // buscarAnimes(nombre: string): Observable<Ianimes> {
  //   const recurso: string = environment.recursoBusqueda + environment.recursoAnime;
  //   const urlServicio: string = this.url + recurso;

  //   let params = new HttpParams()
  //   .set("q", nombre)
  //   .set("page","1")
  //   .set("order_by","members")
  //   .set("sort","desc");

  //   return this.http.get(urlServicio, {params: params}).pipe(map((data: Ianimes) => {
  //     return data;
  //   }));
  // }


}
