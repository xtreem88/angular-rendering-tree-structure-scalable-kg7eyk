import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TreeServiceService } from './tree-service.service';
import { TreeParentComponent } from './tree-parent/tree-parent.component';
import { TreeChildComponent } from './tree-child/tree-child.component';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ScrollingModule, OverlayModule ],
  declarations: [ AppComponent, HelloComponent, TreeParentComponent, TreeChildComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ TreeServiceService ]
})
export class AppModule { }
