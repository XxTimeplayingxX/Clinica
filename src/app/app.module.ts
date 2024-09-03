import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtencionComponent } from './domain/atencion/component/atencion/atencion.component';
import { ListAtencionComponent } from './domain/atencion/pages/list-atencion/list-atencion.component';

@NgModule({
  declarations: [
    AppComponent,
    AtencionComponent,
    ListAtencionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
