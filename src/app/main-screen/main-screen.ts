import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { Guest } from '../models/guest';
import { GuestService } from '../services/guest-service';
import { GestDetails } from '../gest-details/gest-details';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-screen',
  imports: [ZXingScannerModule],
  templateUrl: './main-screen.html',
  styleUrl: './main-screen.css',
})
export class MainScreen {
  availableDevices: MediaDeviceInfo[] = [];
  currentDevice: MediaDeviceInfo | undefined;
  qrResult: string = '';
  guestsList: Guest[] = [];
  constructor(private guestService: GuestService
    ,private dialog: MatDialog
  ) {}
  ngOnInit(): void {
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
    console.log('Código detectado:', resultString);
    alert(`Código detectado: ${resultString}`);
  }

  getList(){
    this.guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];
    if(this.guestsList.length===0){
      this.guestService.import();
      this.guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];

    }
  }

  openDetails(guest:Guest){
    const dialogRef = this.dialog.open(GestDetails, {
      width: '400px',
      data: guest,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('✅ Confirmado cierre para', guest.nombre);
      } else {
        console.log('❌ Cancelado');
      }
    });
  }
}
