import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {ViewWallPromptComponent} from './view-wall-prompt.component';

@Component({
    selector: 'eventwall-app',
    templateUrl: './app/components/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/view',
        name: 'ViewWallPrompt',
        component: ViewWallPromptComponent,
        useAsDefault: true
    }
])

export class AppComponent {}