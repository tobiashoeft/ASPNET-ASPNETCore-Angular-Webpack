import { NavigationComponent } from './components/navigation/navigation.component';
import { Configuration } from './configuration/app.configuration';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        // Modules
        CommonModule,
        RouterModule
    ],

    declarations: [
        // Components & directives
        NavigationComponent
    ],

    providers: [
        // Services
        Configuration
    ],

    exports: [
        NavigationComponent
    ]
})

export class SharedModule { }

