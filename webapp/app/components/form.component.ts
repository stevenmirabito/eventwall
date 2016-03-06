import {Component, AfterViewInit} from 'angular2/core';

@Component({
    selector: 'form-component',
    templateUrl: './app/components/form.component.html',
})

export class FormComponent implements AfterViewInit {
    // Hooks
    ngAfterViewInit() {
        // Re-initialize material components
        window['$'].material.init();
    }
}