import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BattleComponent } from './battle/battle.component';
//import { BattlePokemonComponent } from './battle/battle-pokemon.component';
import { PrepareBattleComponent } from './prepare-battle/prepare-battle.component';
import { SelectPokemonComponent } from './prepare-battle/select-pokemon.component';
import { PokemonSimpleInfoComponent } from './prepare-battle/pokemon-simple-info.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        AppComponent,
        BattleComponent,
        BattlePokemonComponent,
        PrepareBattleComponent,
        SelectPokemonComponent,
        PokemonSimpleInfoComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF}),
        // FormsModule, HttpModule, JsonpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
