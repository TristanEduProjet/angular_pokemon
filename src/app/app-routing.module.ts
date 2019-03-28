import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PrepareBattleComponent } from './prepare-battle/prepare-battle.component';
import { BattleComponent } from './battle/battle.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'select', component: PrepareBattleComponent },
        { path: 'battle', component: BattleComponent },
        // TODO: debugInfo
    ] /*, {useHash: true}*/)],
    // providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    exports: [RouterModule]
})
export class AppRoutingModule { }
