import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialSharedModule } from './material.modules';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    MaterialSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
