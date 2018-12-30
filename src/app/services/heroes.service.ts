import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // tslint:disable-next-line:no-inferrable-types
  HeroeUrl: string =  'https://fir-app-db8e2.firebaseio.com/heroes.json';

  constructor(private http: HttpClient) {
    console.log('Service Check');
  }

  nuevoHeroe (heroe: Heroe) {
    const body = JSON.stringify ( heroe );
    const headers = new HttpHeaders ({
      // 'Content-Type': 'application/json'
      'Content-Type': 'application/json'
    });

    return this.http.post(this.HeroeUrl, body, {headers} );
      // .pipe( map( (res: any) => {
      //   // return res;
      //   console.log(res);
      // })

  }
}
