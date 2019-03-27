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
            img: './assets/gtk-missing-image.png'
        }));
    }

    static getPokemonFromId(id: number) {
        const tmp = findPokemon(id);
        return new Pokemon(tmp.names.fr || tmp.names.en, tmp.base_stats.hp, tmp.base_stats.speed, null, null);
        // .abilities{name hidden*} .move_learnsets[{games learnset[{move level* tm* egg_move*}]}] .types[]
    }

    static getAllTypes() {
        return allTypes();
    }

    // const allItems = oakdexPokedex.allItems();
    // const moves = oakdexPokedex.allMoves(/*{ type: 'Ground' }*/);
}