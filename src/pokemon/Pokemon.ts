import {Attack} from './Move';

export class Pokemon {
  public type: Type;
  constructor(public name: string,public health_point: number,public def: number,public speed: number,public abilities: Attack[],type_string: string) {
    this.type = Type[type_string.toUpperCase()];
    this.abilities.forEach(a => {
      a.log = (msg) => {this.log(msg);};
    })
  }

  throwAttack(pokemon_targeted: Pokemon):Promise<any> {
    let prom = (resolve: any, reject: any)  => {
      setTimeout(() => {
        let randInt = Math.floor(Math.random() * this.abilities.length);
        let attackUsed = this.abilities[randInt];
        let finalDammage: number;

        if(attackUsed.isSuccessful(Math.random() * 100)) {
          if(attackUsed.isCritical(Math.random()))
            finalDammage = pokemon_targeted.takeDammage(pokemon_targeted.reduceDammage(attackUsed.enhanceDammage()));
          else
            finalDammage = pokemon_targeted.takeDammage(this.reduceDammage(attackUsed.dommage));
          this.log(this.name + ' attaque ' + pokemon_targeted.name + ' avec ' + attackUsed.name + ' (base: '+attackUsed.dommage+', final : '+finalDammage+')');
        }
        else {
            this.log(this.name + ' rate son ' + attackUsed.name);
        }

        this.log('Il reste ' + pokemon_targeted.health_point + ' a ' + pokemon_targeted.name);
        resolve();
      }, 1500);
      return null;
    };
    return new Promise(prom);
  }

  takeDammage(dammage): number {
    this.health_point -= dammage;
    return dammage;
  }

  reduceDammage(dammage): number {
    let dammageReduced = dammage - this.def;
    return (dammageReduced > 0 ? dammageReduced : 0);
  }

  /*protected*/ log(msg: string) {
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
