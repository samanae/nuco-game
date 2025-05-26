import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TabletopComponent } from './components/tabletop/tabletop.component';
import { GridComponent } from './components/grid/grid.component';
import { TileComponent } from './components/tile/tile.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ButtonAComponent } from './components/button-a/button-a.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabletopComponent,
    GridComponent,
    TileComponent,
    ButtonAComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
