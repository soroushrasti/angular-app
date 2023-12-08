import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';


import {CoreModule} from "./core.module";
import {SharedModule} from "./shared.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,

    ],
    imports: [
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
        BrowserModule
    ],
    bootstrap: [AppComponent],

})
export class AppModule {}
