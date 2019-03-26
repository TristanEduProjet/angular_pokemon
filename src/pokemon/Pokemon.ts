import {Attaque} from './Move';
export class Pokemon {
  constructor(public name: string, public health_point: number, public speed: number, public attaque: Attaque, public type: Type) {}
}

interface IPokemon {
    name: string;
    health_point: number;
    speed: number;
    attaque: Attaque;
    type: Type;
}

export enum Type {
    PLANTE,
    ELECTRIQUE,
    EAU,
}
