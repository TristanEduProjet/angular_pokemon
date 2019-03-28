import {Type} from './Pokemon';
import {Pokemon} from './Pokemon';

export class Move {
  public dommage: number;
  public type: Type;
  // public logger = (msg: string) => console.log(msg);
    constructor(public name: string, public initial_accuracy: number, public type_string: string) {
      this.type = Type[type_string.toUpperCase()];
      this.dommage = 0;
    }
}

export class Attack {
  public type: Type;
    constructor(public name: string, public initial_accuracy: number, public critical_ratio: number, public type_string: string, public dommage: number) {
      this.type = Type[type_string.toUpperCase()];
    }

    isSuccessful(rand: number) {
      if(this.initial_accuracy >= rand)
        return true;
      return false;
    }

    enhanceDammage(): number {
      this.log('Coup critique! (+ '+(this.dommage * this.critical_ratio)+')');
      return this.dommage  + (this.dommage * this.critical_ratio);
    }

    isCritical(rand: number):boolean {
      if(rand <= 1)
        return true;
      return false;
    }

    log(msg: string)
    {
      console.log(msg);
    }
}

interface IMove {
    name: string;
    initial_accuracy: number;
    type: Type;
    dommage: number;
}
