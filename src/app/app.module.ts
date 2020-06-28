import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimaModule } from '../../projects/prima/src/lib/prima.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
