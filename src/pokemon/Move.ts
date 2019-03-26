import {Type} from './Pokemon';
import {Pokemon} from './Pokemon';

export class Move {
  public dommage: number;
    constructor(public name: string,public initial_accuracy: number,public type: Type) {
      this.dommage=0;
    }
}

export class Attack {
    constructor(public name: string,public initial_accuracy: number,public type: Type,public dommage: number) {
    }
    throwAttack(pokemon_targeted: Pokemon)
    {
      pokemon_targeted.health_point-=this.dommage;
      console.log(this.name + ' attaque ' + pokemon_targeted.name);
      console.log('Il reste ' + pokemon_targeted.health_point + ' à ' + pokemon_targeted.name);
    }
}

interface IMove {
    name: string;
    initial_accuracy: number;
    type: Type;
    dommage: number;
}
