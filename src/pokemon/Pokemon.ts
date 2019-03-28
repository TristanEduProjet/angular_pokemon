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
        let randInt = Math.floor(Math.random() * this.abilities.length);
        pokemon_targeted.health_point-=this.abilities[randInt].dommage;
        this.log(this.name + ' attaque ' + pokemon_targeted.name + ' avec ' + this.abilities[randInt].name);
        this.log('Il reste ' + pokemon_targeted.health_point + ' a ' + pokemon_targeted.name);
        resolve();
      }, 1500);
      return null;
    };
    return new Promise(prom);
  }

  protected log(msg: string) {
      console.log(msg);
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
