import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { TextAdjusterComponent } from './text-adjuster/text-adjuster.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    TextAdjusterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
