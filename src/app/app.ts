import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('AccessApp');

  constructor(private swUpdate: SwUpdate) {
    this.checkSWUpdates();
  }
ngOnInit() {
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      // Al volver al foreground recarga si algo quedó mal
      // window.location.reload();
    }
  });
}
  private checkSWUpdates() {
    if (!this.swUpdate.isEnabled) return;

    this.swUpdate.versionUpdates.subscribe(event => {
      if (event.type === 'VERSION_READY') {
        // Fuerza refresh y evita congelamiento
        // document.location.reload();
      }
    });
  }
}
