import { NGXLogger } from 'ngx-logger';
import {findGeneration, findPokemon, findType, findMove, findAbility, allTypes, allPokemon} from 'oakdex-pokedex/src/oakdex_pokedex';
import {Pokemon} from './Pokemon';

export class Pokedex {
    // private readonly pokedex = require('oakdex-pokedex');

    constructor() { }

    static getAllGenOne() {
        console.log(findGeneration('Generation I').dex_name);
        return /*this.pokedex.*/allPokemon({ dex: findGeneration('Generation I').dex_name.slice(0, -3) }).map(p => ({
                id: p.national_id,
                name: p.names.fr || p.names.en,
                img: 'assets/pokemons/' + (p.national_id || 0).toString().padStart(3, '0') + '.png' || './assets/gtk-missing-image.png'
        }));
    }

    static getPokemonFromId(id: number) {
        const tmp = findPokemon(id);
        return new Pokemon(id, tmp.names.fr || tmp.names.en, tmp.base_stats.hp, tmp.base_stats.speed, null, null);
        // .abilities{name hidden*} .move_learnsets[{games learnset[{move level* tm* egg_move*}]}] .types[]
    }

    static getPokemonEngName(id: number) {
        return findPokemon(id).names.en.trim().toLowerCase();
    }

    static getAllTypes() {
        return allTypes();
    }

    // const allItems = oakdexPokedex.allItems();
    // const moves = oakdexPokedex.allMoves(/*{ type: 'Ground' }*/);
}
