import {Type} from './Pokemon';

export class Move {
  public dommage: number;
    constructor(public name: string, public initial_accuracy: number, public type: Type) {
      this.dommage = 0;
    }
}

export class Attaque {
    constructor(public name: string, public initial_accuracy: number, public type: Type, public dommage: number) {
    }
}

interface IMove {
    name: string;
    initial_accuracy: number;
    type: Type;
    dommage: number;
}
