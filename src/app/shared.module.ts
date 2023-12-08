import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertComponent} from "./shared/alert/alert.component";
import {LoadingSpinnerComponent} from "./shared/loading-spiner/loading-spinner.component";
import {DropdownDirective} from "./shared/dropdown.directive";



@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective
    ],
    imports: [CommonModule],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective,
        CommonModule,
    ],
    entryComponents: [AlertComponent]
})
export class SharedModule {}
