import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Wall, WallService} from './wall.service';

@Component({
    selector: 'wall',
    templateUrl: './app/components/wall.component.html'
})

export class WallComponent implements OnInit {
    images: Array<string>;

    constructor(private _router:Router,
                private _routeParams:RouteParams,
                private _service:WallService) {
    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getImages(id).then(images => this.images = images);
    }
}