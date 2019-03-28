import { Component } from '@angular/core';
import {Pokemon} from '../pokemon/Pokemon';
import {Attack} from '../pokemon/Move';
import {Battle} from '../pokemon/Battle';
import {Type} from '../pokemon/Pokemon';
import {Pokedex} from '../pokemon/Pokedex';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon Battle';

  constructor(private logger: NGXLogger) {
    let dracofeu = Pokedex.getPokemonFromId(2);
    let pika = Pokedex.getPokemonFromId(1);

    /*let fireBall = new Attack('Boule de feu', 10, Type.ELECTRIQUE, 30);
    let eclair = new Attack('Petit eclair', 20, Type.ELECTRIQUE, 15);
    let dracofeu = new Pokemon('Dragon', 100, 30, fireBall, Type.ELECTRIQUE);
    let pika = new Pokemon('pikapika', 70, 50, eclair, Type.ELECTRIQUE);

    let battle = new Battle(dracofeu, pika);
    battle.fight();*/
  }
}
