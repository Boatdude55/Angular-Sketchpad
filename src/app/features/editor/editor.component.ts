import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component ({
    selector: 'paper-editor',
    templateUrl: './editor.template.html',
    styleUrls: ['./editor.style.css']
})

export class EditorComponent {
  
    inBounds = true;
    edge = {
      top: true,
      bottom: true,
      left: true,
      right: true
    };
  
    visualCode = [
      ];
      
    onItemDrop(e: any) {
        // Get the dropped data here
        
        e.dragData.left = e.nativeEvent.clientX + 'px';
        e.dragData.top = e.nativeEvent.clientY + 'px';
        
        this.visualCode.push(e.dragData);
    }
    
    checkEdge(event) {
      this.edge = event;
    }
}