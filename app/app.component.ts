import { Component } from '@angular/core';

@Component({
    selector: 'pm-root',    
    templateUrl:'./app/app.component.html',
    styleUrls:['./app/app.component.css']
})

export class AppComponent {
    pageTitle: string = 'Acme Product Management';
 }
