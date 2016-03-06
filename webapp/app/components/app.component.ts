import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {ViewWallPromptComponent} from './view-wall-prompt.component';
import {UploadToWallComponent} from './upload-to-wall.component';
import {WallComponent} from './wall.component';
import {Wall, WallService} from './wall.service';

@Component({
    selector: 'eventwall-app',
    templateUrl: './app/components/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, WallService]
})

@RouteConfig([
    {
        path: '/view',
        name: 'ViewWallPrompt',
        component: ViewWallPromptComponent,
        useAsDefault: true
    },
    {
        path: '/wall/:id',
        name: 'Wall',
        component: WallComponent
    },
    {
        path: '/upload',
        name: 'UploadToWall',
        component: UploadToWallComponent,
    }
])

export class AppComponent {
    constructor(private _wallService: WallService) {}
}