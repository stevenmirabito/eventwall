import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {WallPromptComponent} from './wallprompt.component';

@Component({
    selector: 'eventwall',
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['WallPrompt']">Wall Prompt</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/wall',
        name: 'WallPrompt',
        component: WallPromptComponent,
        useAsDefault: true
    }
])

export class AppComponent {
    title = 'EventWall';
}