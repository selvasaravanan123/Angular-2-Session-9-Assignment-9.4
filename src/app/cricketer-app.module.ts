import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './cricketer-app.component';
import { CricketerComponent } from './cricketers/cricketers-list.component';
import { MyHighlighterDirective } from 'app/directive/my-highlighter.directive';
import { CriketerDropDownService } from 'app/services/criketer-drop-down.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CricketerComponent,
    MyHighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CriketerDropDownService],
  bootstrap: [AppComponent]
})

export class AppModule { }
