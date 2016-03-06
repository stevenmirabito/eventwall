import {Component} from 'angular2/core';

import {WallPromptComponent} from './wall-prompt.component';

@Component({
    selector: 'view-wall-prompt',
    templateUrl: './app/components/view-wall-prompt.component.html',
    directives: [WallPromptComponent]
})

export class ViewWallPromptComponent {}