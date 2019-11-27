import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableAkitaProdMode, persistState} from '@datorama/akita';
import localForage from 'localforage';
import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {debounceTime} from 'rxjs/operators';


localForage.config({
  driver: localForage.INDEXEDDB,
  name: 'Akita',
  version: 1.0,
  storeName: 'akita-storage'
});

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

persistState({
  storage: localForage,
  preStorageUpdateOperator: () => debounceTime(2000)
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
