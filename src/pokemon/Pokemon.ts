import {Attack} from './Move';
export class Pokemon {
  constructor(public name: string,public health_point: number,public speed: number,public attack: Attack,public type: Type) {}
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
