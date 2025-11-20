import { Injectable } from '@angular/core';
import { Guest } from '../models/guest';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  PERSONAS_MOCK: Guest[] = [
  { id: 1, nombre: "Mariano", apellido: "Acosta", tipoDocumento: "DNI", numeroDocumento: "38832215", isIngress: false, invitationCode: "INV1001" },
  { id: 2, nombre: "Nombre2", apellido: "Apellido2", tipoDocumento: "DNI", numeroDocumento: "23156478", isIngress: true, invitationCode: "INV1002" },
  { id: 3, nombre: "Nombre3", apellido: "Apellido3", tipoDocumento: "PASAPORTE", numeroDocumento: "87945612", isIngress: true, invitationCode: "INV1003" },
  { id: 4, nombre: "Nombre4", apellido: "Apellido4", tipoDocumento: "DNI", numeroDocumento: "43215678", isIngress: false, invitationCode: "INV1004" },
  { id: 5, nombre: "Nombre5", apellido: "Apellido5", tipoDocumento: "DNI", numeroDocumento: "76895432", isIngress: true, invitationCode: "INV1005" },
  { id: 6, nombre: "Nombre6", apellido: "Apellido6", tipoDocumento: "DNI", numeroDocumento: "11478569", isIngress: false, invitationCode: "INV1006" },
  { id: 7, nombre: "Nombre7", apellido: "Apellido7", tipoDocumento: "PASAPORTE", numeroDocumento: "99587412", isIngress: false, invitationCode: "INV1007" },
  { id: 8, nombre: "Nombre8", apellido: "Apellido8", tipoDocumento: "DNI", numeroDocumento: "65897412", isIngress: true, invitationCode: "INV1008" },
  { id: 9, nombre: "Nombre9", apellido: "Apellido9", tipoDocumento: "DNI", numeroDocumento: "78541236", isIngress: false, invitationCode: "INV1009" },
]
 private API_URL = 'https://b8694817f10b.ngrok-free.app/guests';
  private API_KEY = 'read-secret'; // <-- cambiá esto
constructor(private http: HttpClient) {}
  // public import(){
  //   localStorage.setItem("guests", JSON.stringify(this.PERSONAS_MOCK)) 
  //   // return this.PERSONAS_MOCK;
  // }
// public import(): Promise<Guest[]> {
//   return new Promise((resolve, reject) => {
//     try {
//       // localStorage.setItem('guests', JSON.stringify(this.PERSONAS_MOCK));
//       resolve(this.PERSONAS_MOCK);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }
public import() {
    const headers = new HttpHeaders({
      'x-api-key': this.API_KEY,
      'ngrok-skip-browser-warning': 'true'
    });

    return this.http.get<Guest[]>(this.API_URL, { headers }).toPromise();
  }
  public setIngress(guest: Guest) {
    const headers = new HttpHeaders({
      'x-api-key': this.API_KEY,
      'ngrok-skip-browser-warning': 'true'
    });
    var guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];
    var gest=guestsList.find((g:Guest)=>g.id===guest.id);
    if(gest){
      gest.isIngress=true;

      localStorage.setItem('guests', JSON.stringify(guestsList));
    }
    return this.http.patch<Guest>(`${this.API_URL}/${guest.invitationCode}/ingress`, guest, { headers }).toPromise();
  }
}




