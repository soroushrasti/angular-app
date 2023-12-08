import {Component, EventEmitter, Injectable, Input, Output} from "@angular/core";


@Component({
    selector:"app-alert",
    templateUrl:'./alert.component.html',
    styleUrls:['alert.component.css']
})
export class AlertComponent{
    @Input() message: string;
    @Output() close= new EventEmitter<boolean>();

    onClose() {
        this.close.emit()
    }
}