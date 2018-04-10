import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { EditorComponent } from './features/editor/editor.component';
import { ConsoleComponent } from './features/console/console.component';
import { ToolsComponent } from './features/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ConsoleComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot(),
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
