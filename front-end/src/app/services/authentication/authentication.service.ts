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
    let userInfo: any = {
      'mail': mail,
      'password': password
    };

    // On envoie la requête HTTP
    this.httpClient.post<any>('http://localhost:3000/login', userInfo, httpOptions)
      .subscribe(
        res => {
          // Si le serveur retourne un succès, on a dans "res" de la donnée envoyée par le serveur
          console.log(res);
        },
        error => {
          // Si le serveur retourneune erreur, on a dans "error" le descriptif de l'erreur ( code de status, message de status)
        }
      );
  }
  // Methode utilisée pour mettre à jour l'observable lié aux données de l'utilisateur

}
