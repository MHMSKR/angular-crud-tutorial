import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchingDataComponent } from './sections/searching-data/searching-data.component';
import { ShowDataTableComponent } from './sections/show-data-table/show-data-table.component';
import { InputModalComponent } from './sections/input-modal/input-modal.component';
import { ContainerComponent } from './sections/container/container.component';
import { MaterialModuleModule } from './materail-module/material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CallApiService } from './serveice/call-api.service'

import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    SearchingDataComponent,
    ShowDataTableComponent,
    InputModalComponent,
    ContainerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [CallApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
