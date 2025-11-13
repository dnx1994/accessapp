import { Injectable } from '@angular/core';
import { Guest } from '../models/guest';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  PERSONAS_MOCK: Guest[] = [
  { id: 1, nombre: "Nombre1", apellido: "Apellido1", tipoDocumento: "DNI", numeroDocumento: "15389245", isIngress: false, invitationCode: "INV1001" },
  { id: 2, nombre: "Nombre2", apellido: "Apellido2", tipoDocumento: "DNI", numeroDocumento: "23156478", isIngress: true, invitationCode: "INV1002" },
  { id: 3, nombre: "Nombre3", apellido: "Apellido3", tipoDocumento: "PASAPORTE", numeroDocumento: "87945612", isIngress: true, invitationCode: "INV1003" },
  { id: 4, nombre: "Nombre4", apellido: "Apellido4", tipoDocumento: "DNI", numeroDocumento: "43215678", isIngress: false, invitationCode: "INV1004" },
  { id: 5, nombre: "Nombre5", apellido: "Apellido5", tipoDocumento: "DNI", numeroDocumento: "76895432", isIngress: true, invitationCode: "INV1005" },
  { id: 6, nombre: "Nombre6", apellido: "Apellido6", tipoDocumento: "DNI", numeroDocumento: "11478569", isIngress: false, invitationCode: "INV1006" },
  { id: 7, nombre: "Nombre7", apellido: "Apellido7", tipoDocumento: "PASAPORTE", numeroDocumento: "99587412", isIngress: false, invitationCode: "INV1007" },
  { id: 8, nombre: "Nombre8", apellido: "Apellido8", tipoDocumento: "DNI", numeroDocumento: "65897412", isIngress: true, invitationCode: "INV1008" },
  { id: 9, nombre: "Nombre9", apellido: "Apellido9", tipoDocumento: "DNI", numeroDocumento: "78541236", isIngress: false, invitationCode: "INV1009" },
  { id: 10, nombre: "Nombre10", apellido: "Apellido10", tipoDocumento: "PASAPORTE", numeroDocumento: "95412368", isIngress: true, invitationCode: "INV1010" },
  { id: 11, nombre: "Nombre11", apellido: "Apellido11", tipoDocumento: "DNI", numeroDocumento: "74125896", isIngress: true, invitationCode: "INV1011" },
  { id: 12, nombre: "Nombre12", apellido: "Apellido12", tipoDocumento: "DNI", numeroDocumento: "99874125", isIngress: false, invitationCode: "INV1012" },
  { id: 13, nombre: "Nombre13", apellido: "Apellido13", tipoDocumento: "PASAPORTE", numeroDocumento: "55412879", isIngress: true, invitationCode: "INV1013" },
  { id: 14, nombre: "Nombre14", apellido: "Apellido14", tipoDocumento: "DNI", numeroDocumento: "68954712", isIngress: false, invitationCode: "INV1014" },
  { id: 15, nombre: "Nombre15", apellido: "Apellido15", tipoDocumento: "DNI", numeroDocumento: "87541236", isIngress: false, invitationCode: "INV1015" },
  { id: 16, nombre: "Nombre16", apellido: "Apellido16", tipoDocumento: "PASAPORTE", numeroDocumento: "35478965", isIngress: true, invitationCode: "INV1016" },
  { id: 17, nombre: "Nombre17", apellido: "Apellido17", tipoDocumento: "DNI", numeroDocumento: "69874523", isIngress: true, invitationCode: "INV1017" },
  { id: 18, nombre: "Nombre18", apellido: "Apellido18", tipoDocumento: "DNI", numeroDocumento: "54789632", isIngress: false, invitationCode: "INV1018" },
  { id: 19, nombre: "Nombre19", apellido: "Apellido19", tipoDocumento: "PASAPORTE", numeroDocumento: "21457896", isIngress: true, invitationCode: "INV1019" },
  { id: 20, nombre: "Nombre20", apellido: "Apellido20", tipoDocumento: "DNI", numeroDocumento: "98745231", isIngress: false, invitationCode: "INV1020" },
  { id: 21, nombre: "Nombre21", apellido: "Apellido21", tipoDocumento: "DNI", numeroDocumento: "23147896", isIngress: true, invitationCode: "INV1021" },
  { id: 22, nombre: "Nombre22", apellido: "Apellido22", tipoDocumento: "PASAPORTE", numeroDocumento: "78541236", isIngress: false, invitationCode: "INV1022" },
  { id: 23, nombre: "Nombre23", apellido: "Apellido23", tipoDocumento: "DNI", numeroDocumento: "96587412", isIngress: false, invitationCode: "INV1023" },
  { id: 24, nombre: "Nombre24", apellido: "Apellido24", tipoDocumento: "DNI", numeroDocumento: "12547896", isIngress: true, invitationCode: "INV1024" },
  { id: 25, nombre: "Nombre25", apellido: "Apellido25", tipoDocumento: "PASAPORTE", numeroDocumento: "89654723", isIngress: true, invitationCode: "INV1025" },
  { id: 26, nombre: "Nombre26", apellido: "Apellido26", tipoDocumento: "DNI", numeroDocumento: "54789632", isIngress: false, invitationCode: "INV1026" },
  { id: 27, nombre: "Nombre27", apellido: "Apellido27", tipoDocumento: "DNI", numeroDocumento: "21478596", isIngress: true, invitationCode: "INV1027" },
  { id: 28, nombre: "Nombre28", apellido: "Apellido28", tipoDocumento: "PASAPORTE", numeroDocumento: "32569874", isIngress: false, invitationCode: "INV1028" },
  { id: 29, nombre: "Nombre29", apellido: "Apellido29", tipoDocumento: "DNI", numeroDocumento: "98564732", isIngress: false, invitationCode: "INV1029" },
  { id: 30, nombre: "Nombre30", apellido: "Apellido30", tipoDocumento: "DNI", numeroDocumento: "75648923", isIngress: true, invitationCode: "INV1030" },
  { id: 31, nombre: "Nombre31", apellido: "Apellido31", tipoDocumento: "PASAPORTE", numeroDocumento: "69874512", isIngress: false, invitationCode: "INV1031" },
  { id: 32, nombre: "Nombre32", apellido: "Apellido32", tipoDocumento: "DNI", numeroDocumento: "87456329", isIngress: true, invitationCode: "INV1032" },
  { id: 33, nombre: "Nombre33", apellido: "Apellido33", tipoDocumento: "DNI", numeroDocumento: "96587423", isIngress: false, invitationCode: "INV1033" },
  { id: 34, nombre: "Nombre34", apellido: "Apellido34", tipoDocumento: "PASAPORTE", numeroDocumento: "32569874", isIngress: true, invitationCode: "INV1034" },
  { id: 35, nombre: "Nombre35", apellido: "Apellido35", tipoDocumento: "DNI", numeroDocumento: "14578963", isIngress: false, invitationCode: "INV1035" },
  { id: 36, nombre: "Nombre36", apellido: "Apellido36", tipoDocumento: "DNI", numeroDocumento: "87451236", isIngress: true, invitationCode: "INV1036" },
  { id: 37, nombre: "Nombre37", apellido: "Apellido37", tipoDocumento: "PASAPORTE", numeroDocumento: "36547896", isIngress: false, invitationCode: "INV1037" },
  { id: 38, nombre: "Nombre38", apellido: "Apellido38", tipoDocumento: "DNI", numeroDocumento: "98564723", isIngress: true, invitationCode: "INV1038" },
  { id: 39, nombre: "Nombre39", apellido: "Apellido39", tipoDocumento: "DNI", numeroDocumento: "24569874", isIngress: false, invitationCode: "INV1039" },
  { id: 40, nombre: "Nombre40", apellido: "Apellido40", tipoDocumento: "PASAPORTE", numeroDocumento: "36587412", isIngress: true, invitationCode: "INV1040" },
  { id: 41, nombre: "Nombre41", apellido: "Apellido41", tipoDocumento: "DNI", numeroDocumento: "74125689", isIngress: false, invitationCode: "INV1041" },
  { id: 42, nombre: "Nombre42", apellido: "Apellido42", tipoDocumento: "DNI", numeroDocumento: "96587412", isIngress: true, invitationCode: "INV1042" },
  { id: 43, nombre: "Nombre43", apellido: "Apellido43", tipoDocumento: "PASAPORTE", numeroDocumento: "87452369", isIngress: false, invitationCode: "INV1043" },
  { id: 44, nombre: "Nombre44", apellido: "Apellido44", tipoDocumento: "DNI", numeroDocumento: "12547896", isIngress: true, invitationCode: "INV1044" },
  { id: 45, nombre: "Nombre45", apellido: "Apellido45", tipoDocumento: "DNI", numeroDocumento: "69874523", isIngress: false, invitationCode: "INV1045" },
  { id: 46, nombre: "Nombre46", apellido: "Apellido46", tipoDocumento: "PASAPORTE", numeroDocumento: "98564712", isIngress: true, invitationCode: "INV1046" },
  { id: 47, nombre: "Nombre47", apellido: "Apellido47", tipoDocumento: "DNI", numeroDocumento: "21457896", isIngress: false, invitationCode: "INV1047" },
  { id: 48, nombre: "Nombre48", apellido: "Apellido48", tipoDocumento: "DNI", numeroDocumento: "69854712", isIngress: true, invitationCode: "INV1048" },
  { id: 49, nombre: "Nombre49", apellido: "Apellido49", tipoDocumento: "PASAPORTE", numeroDocumento: "87456329", isIngress: false, invitationCode: "INV1049" },
  { id: 50, nombre: "Nombre50", apellido: "Apellido50", tipoDocumento: "DNI", numeroDocumento: "74589632", isIngress: true, invitationCode: "INV1050" },
  { id: 51, nombre: "Nombre51", apellido: "Apellido51", tipoDocumento: "DNI", numeroDocumento: "65478912", isIngress: false, invitationCode: "INV1051" },
  { id: 52, nombre: "Nombre52", apellido: "Apellido52", tipoDocumento: "PASAPORTE", numeroDocumento: "74586932", isIngress: true, invitationCode: "INV1052" },
  { id: 53, nombre: "Nombre53", apellido: "Apellido53", tipoDocumento: "DNI", numeroDocumento: "98564732", isIngress: false, invitationCode: "INV1053" },
  { id: 54, nombre: "Nombre54", apellido: "Apellido54", tipoDocumento: "DNI", numeroDocumento: "32569874", isIngress: true, invitationCode: "INV1054" },
  { id: 55, nombre: "Nombre55", apellido: "Apellido55", tipoDocumento: "PASAPORTE", numeroDocumento: "21478596", isIngress: false, invitationCode: "INV1055" },
  { id: 56, nombre: "Nombre56", apellido: "Apellido56", tipoDocumento: "DNI", numeroDocumento: "54789632", isIngress: true, invitationCode: "INV1056" },
  { id: 57, nombre: "Nombre57", apellido: "Apellido57", tipoDocumento: "DNI", numeroDocumento: "89654723", isIngress: false, invitationCode: "INV1057" },
  { id: 58, nombre: "Nombre58", apellido: "Apellido58", tipoDocumento: "PASAPORTE", numeroDocumento: "12547896", isIngress: true, invitationCode: "INV1058" },
  { id: 59, nombre: "Nombre59", apellido: "Apellido59", tipoDocumento: "DNI", numeroDocumento: "96587412", isIngress: false, invitationCode: "INV1059" },
  { id: 60, nombre: "Nombre60", apellido: "Apellido60", tipoDocumento: "DNI", numeroDocumento: "78541236", isIngress: true, invitationCode: "INV1060" },
  { id: 61, nombre: "Nombre61", apellido: "Apellido61", tipoDocumento: "PASAPORTE", numeroDocumento: "23147896", isIngress: false, invitationCode: "INV1061" },
  { id: 62, nombre: "Nombre62", apellido: "Apellido62", tipoDocumento: "DNI", numeroDocumento: "98745231", isIngress: true, invitationCode: "INV1062" },
  { id: 63, nombre: "Nombre63", apellido: "Apellido63", tipoDocumento: "DNI", numeroDocumento: "21457896", isIngress: false, invitationCode: "INV1063" },
  { id: 64, nombre: "Nombre64", apellido: "Apellido64", tipoDocumento: "PASAPORTE", numeroDocumento: "54789632", isIngress: true, invitationCode: "INV1064" },
  { id: 65, nombre: "Nombre65", apellido: "Apellido65", tipoDocumento: "DNI", numeroDocumento: "69874523", isIngress: false, invitationCode: "INV1065" },
  { id: 66, nombre: "Nombre66", apellido: "Apellido66", tipoDocumento: "DNI", numeroDocumento: "78541236", isIngress: true, invitationCode: "INV1066" },
  { id: 67, nombre: "Nombre67", apellido: "Apellido67", tipoDocumento: "PASAPORTE", numeroDocumento: "32569874", isIngress: false, invitationCode: "INV1067" },
  { id: 68, nombre: "Nombre68", apellido: "Apellido68", tipoDocumento: "DNI", numeroDocumento: "87451236", isIngress: true, invitationCode: "INV1068" },
  { id: 69, nombre: "Nombre69", apellido: "Apellido69", tipoDocumento: "DNI", numeroDocumento: "98564723", isIngress: false, invitationCode: "INV1069" },
  { id: 70, nombre: "Nombre70", apellido: "Apellido70", tipoDocumento: "PASAPORTE", numeroDocumento: "21478596", isIngress: true, invitationCode: "INV1070" },
  { id: 71, nombre: "Nombre71", apellido: "Apellido71", tipoDocumento: "DNI", numeroDocumento: "96587423", isIngress: false, invitationCode: "INV1071" },
  { id: 72, nombre: "Nombre72", apellido: "Apellido72", tipoDocumento: "DNI", numeroDocumento: "87456329", isIngress: true, invitationCode: "INV1072" },
  { id: 73, nombre: "Nombre73", apellido: "Apellido73", tipoDocumento: "PASAPORTE", numeroDocumento: "74589632", isIngress: false, invitationCode: "INV1073" },
  { id: 74, nombre: "Nombre74", apellido: "Apellido74", tipoDocumento: "DNI", numeroDocumento: "69854712", isIngress: true, invitationCode: "INV1074" },
  { id: 75, nombre: "Nombre75", apellido: "Apellido75", tipoDocumento: "DNI", numeroDocumento: "21457896", isIngress: false, invitationCode: "INV1075" },
  { id: 76, nombre: "Nombre76", apellido: "Apellido76", tipoDocumento: "PASAPORTE", numeroDocumento: "98564712", isIngress: true, invitationCode: "INV1076" },
  { id: 77, nombre: "Nombre77", apellido: "Apellido77", tipoDocumento: "DNI", numeroDocumento: "69874523", isIngress: false, invitationCode: "INV1077" },
  { id: 78, nombre: "Nombre78", apellido: "Apellido78", tipoDocumento: "DNI", numeroDocumento: "12547896", isIngress: true, invitationCode: "INV1078" },
  { id: 79, nombre: "Nombre79", apellido: "Apellido79", tipoDocumento: "PASAPORTE", numeroDocumento: "87452369", isIngress: false, invitationCode: "INV1079" },
  { id: 80, nombre: "Nombre80", apellido: "Apellido80", tipoDocumento: "DNI", numeroDocumento: "96587412", isIngress: true, invitationCode: "INV1080" },
  { id: 81, nombre: "Nombre81", apellido: "Apellido81", tipoDocumento: "DNI", numeroDocumento: "74125689", isIngress: false, invitationCode: "INV1081" },
  { id: 82, nombre: "Nombre82", apellido: "Apellido82", tipoDocumento: "PASAPORTE", numeroDocumento: "36587412", isIngress: true, invitationCode: "INV1082" }]

  // public import(){
  //   localStorage.setItem("guests", JSON.stringify(this.PERSONAS_MOCK)) 
  //   // return this.PERSONAS_MOCK;
  // }
public import(): Promise<Guest[]> {
  return new Promise((resolve, reject) => {
    try {
      // localStorage.setItem('guests', JSON.stringify(this.PERSONAS_MOCK));
      resolve(this.PERSONAS_MOCK);
    } catch (error) {
      reject(error);
    }
  });
}





}
