export interface Guest {
  id: number;
  nombre: string;
  apellido: string;
  tipoDocumento: 'DNI' | 'PASAPORTE' | 'CUIT' | 'LE' | 'LC';
  numeroDocumento: string;
  isIngress: boolean;
  invitationCode:string
}