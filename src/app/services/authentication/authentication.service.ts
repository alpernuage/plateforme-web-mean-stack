import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  // Methode servant à vérifier l'identité d'un utilisateur souhaitant se connecter
  login(mail: string, password: string): any {
    // console.log('authservice:' + mail + ' ' + password);
    // création des en-tes de la requête http
    const httpOptions = {
      headers: new HttpHeaders({
        'Content- Type': 'application/json' //on indique qu'on échange du json
      })
    }
    let userInfos: any = {
      'mail': mail,
      'password': password
    };
    this.httpClient.post('http://localhost:3000/login', userInfos, httpOptions);
    this.httpClient.get('http://localhost:3000/login?mail=' + mail + "&password=" + password, httpOptions);
    return;
  }
}
