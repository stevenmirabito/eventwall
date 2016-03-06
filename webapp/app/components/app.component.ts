import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {ViewWallPromptComponent} from './view-wall-prompt.component';
import {UploadToWallComponent} from './upload-to-wall.component';
import {WallComponent} from './wall.component';

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
    },
    {
        path: '/view/:id',
        name: 'Wall',
        component: WallComponent
    },
    {
        path: '/upload',
        name: 'UploadToWall',
        component: UploadToWallComponent,
    }
])

export class AppComponent {}