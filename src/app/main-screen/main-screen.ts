import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

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

  ngOnInit(): void { }

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
  }
}
