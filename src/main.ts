import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
bootstrapApplication(App, appConfig)
  .then(appRef => {
    console.log('[BOOT] Angular inició OK');

    const sw = appRef.injector.get(SwUpdate, null);

    if (sw) {
      console.log('[SW] Service Worker habilitado');

      // 📌 Cuando Angular detecta una nueva versión
      // sw.versionUpdates.subscribe(evt => {
      //   console.warn('[SW] versionUpdates EVENTO:', evt);
      //   console.warn('[SW] Recargando porque versionUpdates disparó update');
      //   location.reload();
      // });

      // 📌 Registro del service worker
      navigator.serviceWorker?.ready.then(reg => {
        console.log('[SW] Service Worker listo:', reg);

        if (reg.active) {
          console.log('[SW] Active state:', reg.active.state);
          reg.active.addEventListener('statechange', (e) => {
            console.warn('[SW] Active SW statechange:', reg.active?.state);
          });
        }

        // Detecta si hay más de 1 worker → loop infinito
        navigator.serviceWorker.getRegistrations()
          .then(regs => {
            console.log(`[SW] Cantidad de SW registrados: ${regs.length}`);
            regs.forEach((r, i) =>
              console.log(`[SW ${i}]`, r.active?.scriptURL, r.active?.state)
            );
          });
      });
    } else {
      console.warn('[SW] NO hay service worker');
    }

    // 📌 Timeout de diagnóstico (no recarga ni borra nada)
    setTimeout(() => {
      const root = document.querySelector('app-root');
      const rendered = root && root.children.length > 0;
      console.log(`[BOOT] Estado después de 3s: render=${rendered}`);
    }, 3000);

  })
  .catch(err => console.error(err));