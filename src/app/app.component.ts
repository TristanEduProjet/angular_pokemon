import { Component } from '@angular/core';
import {Pokemon} from '../pokemon/Pokemon';
import {Attack} from '../pokemon/Move';
import {Battle} from '../pokemon/Battle';
import {Type} from '../pokemon/Pokemon';
import {Pokedex} from '../pokemon/Pokedex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon Battle';

  constructor() {
    let dracofeu = Pokedex.getPokemonFromId(2);
    let pika = Pokedex.getPokemonFromId(1);

    let battle = new Battle(dracofeu, pika);
    battle.fight();
  }
}
