import { Component } from '@angular/core';

@Component ({
    selector: 'tools',
    templateUrl: './tools.template.html',
    styleUrls: ['./tools.style.css']
})

export class ToolsComponent {
    
    toolsDraggable = [
        {
            name: 'variable',
            icon: 'add',
            style: {
                'background-color': 'red',
                'position': 'absolute',
                'top': '0px',
                'left': '0px',
                'width': '50px',
                'height': '50px',
                'border-radius': '15px'
            }
        },
        {
            name: 'function',
            icon: 'functions',
            style: {
                'background-color': 'blue',
                'position': 'absolute',
                'top': '0px',
                'left': '0px',
                'width': '100px',
                'height': '100px',
                'border-radius': '15px'
            }
        },
        {
            name: 'loop',
            icon: 'loop',
            style: {
                'background-color': 'pink',
                'position': 'absolute',
                'top': '0px',
                'left': '0px',
                'width': '300px',
                'height': '100px',
                'border-radius': '15px'
            }
        }
    ];
    
    tools = [ 
        {
            name: 'control-flow',
            icon: 'directions',
            style: {
                'background-color':  'green',
                'position': 'absolute',
                'top': '0px',
                'left': '0px',
                'width': '100px',
                'height': '100px',
                'border-radius': '15px'
            }
        },
        {
            name: 'share',
            icon: 'send',
            style: {
                'background-color': 'amber',
                'position': 'absolute',
                'top': '0px',
                'left': '0px',
                'width': '100px',
                'height': '100px',
                'border-radius': '15px'
            }
        },
        {
            name: 'repl',
            icon: 'code',
            style: {
                'background-color': 'purple',
                'position': 'absolute',
                'top': '0px',
                'left': '0px',
                'width': '100px',
                'height': '100px',
                'border-radius': '15px'
            }
        }
    ];
    
}