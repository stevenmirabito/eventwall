import {Component} from 'angular2/core';
import {FormComponent} from './form.component';

@Component({
    selector: 'wall-prompt',
    templateUrl: './app/components/wall-prompt.component.html',
    directives: [FormComponent]
})

export class WallPromptComponent {}