import {HttpClientModule} from '@angular/common/http';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {selectPersistStateInit} from '@datorama/akita';
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ExamplesModule} from './examples/examples.module';

const akitaInitializer = () => {
  return () => selectPersistStateInit().toPromise()
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ExamplesModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useValue: akitaInitializer, multi: true },
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'http://localhost:3000' }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
