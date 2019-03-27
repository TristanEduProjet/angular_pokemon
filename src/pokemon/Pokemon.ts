import {Attack} from './Move';

export class Pokemon {
  public type: Type;
  constructor(public name: string,public health_point: number,public speed: number,public abilities: Attack[],type_string: string) {
    let carotte = type_string.toUpperCase();
    this.type = Type[carotte];
  }

  throwAttack(pokemon_targeted: Pokemon):Promise<any> {
    let prom = (resolve: any, reject: any)  => {
      setTimeout(() => {
        pokemon_targeted.health_point-=this.abilities[0].dommage;
        console.log(this.name + ' attaque ' + pokemon_targeted.name);
        console.log('Il reste ' + pokemon_targeted.health_point + ' a ' + pokemon_targeted.name);
        resolve();
      }, 1500);
      return null;
    };
    return new Promise(prom);
  }
}

interface IPokemon {
    name: string;
    health_point: number;
    speed: number;
    attack: Attack;
    type: Type;
}

export enum Type {
    NORMAL,
    FIGHTING,
    FLYING,
    POISON,
    GROUND,
    ROCK,
    BUG,
    GHOST,
    STEEL,
    FRIE,
    WATER,
    GRASS,
    ELECTRIC,
    PSYCHIC,
    ICE,
    DRAGON,
    DARK,
    FAIRY,
}
