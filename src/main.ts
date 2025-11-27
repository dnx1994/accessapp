import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
bootstrapApplication(App, appConfig).then(appRef => {
  // Detecta SW zombie y recarga
  const sw = appRef.injector.get(SwUpdate, null);

  if (sw) {
    sw.versionUpdates.subscribe(evt => {
      location.reload();
    });
  }

  // Timeout del arranque
  setTimeout(() => {
    if (!(window as any).ngRef) {
      caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
      location.reload();
    }
  }, 3000);
})
  .catch((err) => console.error(err));
