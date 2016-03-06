import {Component} from 'angular2/core';
import {FormComponent} from './form.component';

@Component({
    selector: 'upload-to-wall',
    templateUrl: './app/components/upload-to-wall.component.html',
    directives: [FormComponent]
})

export class UploadToWallComponent {}