import {Component, AfterViewInit} from 'angular2/core';

@Component({
    selector: 'wall-prompt',
    templateUrl: './app/components/wall-prompt.component.html'
})

export class WallPromptComponent implements AfterViewInit {
    // Hooks
    ngAfterViewInit() {
        // Re-initialize material components
        window['$'].material.init();
    }
}