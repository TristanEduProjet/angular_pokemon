import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, animateChild, group, transition, animate, style, query } from '@angular/animations';

import { HomeComponent } from './home.component';
import { PrepareBattleComponent } from './prepare-battle/prepare-battle.component';
import { BattleComponent } from './battle/battle.component';

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'select', component: PrepareBattleComponent },
        { path: 'battle/:p1/:p2', component: BattleComponent },
        // TODO: debugInfo
    ] /*, {useHash: true}*/)],
    // providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    exports: [RouterModule, BrowserAnimationsModule]
})
export class AppRoutingModule { }

export const slideInAnimation = trigger('routeAnimation', [
    transition('home <=> select', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ left: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
            query(':leave', [
                animate('300ms ease-out', style({ left: '100%'}))
            ]),
            query(':enter', [
                animate('300ms ease-out', style({ left: '0%'}))
            ])
        ]),
        query(':enter', animateChild()),
    ])
]);
