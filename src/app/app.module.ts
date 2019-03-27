import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BattleComponent } from './battle/battle.component';
//import { BattlePokemonComponent } from './battle/battle-pokemon.component';
import { PrepareBattleComponent } from './prepare-battle/prepare-battle.component';
import { SelectPokemonComponent } from './prepare-battle/select-pokemon.component';
//import { PokemonSimpleInfoComponent } from './prepare-battle/pokemon-simple-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PrepareBattleComponent,
    SelectPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
