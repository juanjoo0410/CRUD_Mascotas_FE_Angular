import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Mascota } from '../interfaces/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private urlApi: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  getMascotas(){
    return this.http.get<Mascota[]>(this.urlApi)
  }
}
