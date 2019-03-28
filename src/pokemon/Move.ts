import {Type} from './Pokemon';
import {Pokemon} from './Pokemon';

export class Move {
  public dommage: number;
  public type: Type;
  // public logger = (msg: string) => console.log(msg);
    constructor(public name: string, public initial_accuracy: number, public type_string: string) {
      let carotte = type_string.toUpperCase();
      this.type = Type[carotte];
      this.dommage = 0;
    }
}

export class Attack {
  public type: Type;
    constructor(public name: string, public initial_accuracy: number, public type_string: string, public dommage: number) {
      let carotte = type_string.toUpperCase();
      this.type = Type[carotte];
    }

    isSuccessful(rand: number) {
      if(this.initial_accuracy <= rand)
        return true;
      return false;
    }
}

interface IMove {
    name: string;
    initial_accuracy: number;
    type: Type;
    dommage: number;
}
