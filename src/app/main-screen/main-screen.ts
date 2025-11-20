import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { Guest } from '../models/guest';
import { GuestService } from '../services/guest-service';
import { GestDetails } from '../gest-details/gest-details';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { GestIndex } from '../gest-index/gest-index';
import { MatMenu, MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-main-screen',
  imports: [ZXingScannerModule, MatIconModule, CommonModule, MatToolbarModule, FormsModule, MatMenuModule , MatToolbarModule],
  templateUrl: './main-screen.html',
  styleUrl: './main-screen.css',
})
export class MainScreen {
  availableDevices: MediaDeviceInfo[] = [];
  currentDevice: MediaDeviceInfo | undefined;
  qrResult: string = '';
  guestsList: Guest[] = [];
  isreading: boolean = false;
  code:string='';
  constructor(private guestService: GuestService
    ,private dialog: MatDialog,
    
  ) {}
  ngOnInit(): void {
    this.pedirPermisoCamara();
    this.getList();
   }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    if (devices.length > 0) {
      // Selecciona la cámara trasera por defecto (si existe)
      const backCam = devices.find(d => /back|rear|environment/i.test(d.label));
      this.currentDevice = backCam || devices[0];
    }
  }

  onDeviceSelectChange(event: any): void {
    const deviceId = event.target.value;
    this.currentDevice = this.availableDevices.find(d => d.deviceId === deviceId);
  }

  onCodeResult(resultString: string) {
    this.qrResult = resultString;
    this.isreading=false;
    console.log('Código detectado:', resultString);
    alert(`Código detectado: ${resultString}`);
    this.openDetails(this.guestsList.find(g=>g.invitationCode===resultString)!);
  }

  getList(){
    this.guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];
    if(this.guestsList.length===0){
      this.guestService.import().then((x: Guest[] | undefined) => {
        if (x && x.length) {
          this.guestsList = x;
          localStorage.setItem('guests', JSON.stringify(x));
        }
      });
      // this.guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];

    }
  }

  openDetails(guest:Guest){
    if(!guest){
      alert('Invitado no encontrado para el código escaneado.');
      this.isreading=false;
      return;
    }
    const dialogRef = this.dialog.open(GestDetails, {
      width: '400px',
      data: guest,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('✅ Confirmado cierre para', guest.nombre);
        this.isreading=false;
        this.guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];

      } else {
        console.log('❌ Cancelado');
        this.isreading=false;
        this.guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];

      }
    });
  }
  async pedirPermisoCamara() {
  try {
    const status = await navigator.permissions.query({ name: 'camera' as PermissionName });
    console.log('Estado permiso:', status.state);

    if (status.state === 'granted') {
      console.log('✅ Cámara ya permitida');
      return true;
    } else if (status.state === 'prompt') {
      await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('✅ Permiso concedido tras prompt');
      return true;
    } else {
      alert('⚠️ Necesitás habilitar manualmente el permiso de cámara en los ajustes del navegador o del sistema.');
      return false;
    }
  } catch (err) {
    console.error('Error al solicitar cámara', err);
    return false;
  }
}
read(){
        this.isreading=true;
        console.log('Iniciando lectura de QR...', this.isreading);
}

toggleMenu() {
  const ok = confirm("¿Estás seguro de que querés importar los invitados?");
  if (!ok) return;
    this.guestService.import().then((x: Guest[] | undefined) => {
      if (x && x.length) {
        alert('Importando invitados desde el servicio...');
        this.guestsList = x;
        localStorage.setItem('guests', JSON.stringify(x));
      }else{
        alert('No se pudieron importar los invitados.');
      }
    }).catch(err=>{
      alert('Error al importar invitados:\n' + JSON.stringify(err, null, 2));
    });
    // alert('Abrir menú');
  }
  searchManual() {
    this.qrResult = this.code;
    this.isreading=false;
    console.log('Código detectado:', this.qrResult);
    alert(`Código detectado: ${this.qrResult}`);
    this.openDetails(this.guestsList.find(g=>g.invitationCode===this.qrResult)!);
  }
  search(){
    const dialogRef = this.dialog.open(GestIndex, {
      width: '400px',
      data: this.guestsList,
      // disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log('✅ Confirmado cierre para', guest.nombre);
        this.guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];
        this.isreading=false;

      } else {
        console.log('❌ Cancelado');
        this.guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];
        this.isreading=false;

      }
    });
  }

}
