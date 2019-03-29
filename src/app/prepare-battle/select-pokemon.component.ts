import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import {Pokedex} from '../../pokemon/Pokedex';
import {Pokemon} from '../../pokemon';

@Component({
    selector: 'app-select-pokemon',
    templateUrl: './select-pokemon.component.html',
    styleUrls: ['./select-pokemon.component.css']
})
export class SelectPokemonComponent implements OnInit {
    private pokemons = [];
    public selected: Pokemon = null;

    constructor(private logger: NGXLogger) { }

    ngOnInit() {
        this.pokemons = Pokedex.getAllGenOne();
    }

    onSelect(pokemon: any) {
        this.selected = Pokedex.getPokemonFromId(pokemon.id);
        console.log('New pokemon selected of id ' + pokemon.id + ' : ' + JSON.stringify(pokemon));
    }
}
