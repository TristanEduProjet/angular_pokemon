import {Attack} from './Move';
export class Pokemon {
  constructor(public name: string,public health_point: number,public speed: number,public attack: Attack,public type: Type) {}
  throwAttack(pokemon_targeted: Pokemon)
  {
    pokemon_targeted.health_point-=this.attack.dommage;
    console.log(this.name + ' attaque ' + pokemon_targeted.name);
    console.log('Il reste ' + pokemon_targeted.health_point + ' à ' + pokemon_targeted.name);
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
    PLANTE,
    ELECTRIQUE,
    EAU,
}
