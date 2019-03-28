import {Attack} from './Move';
export class Pokemon {
    constructor(public name: string, public health_point: number, public speed: number, public attack: Attack, public type: Type) {}

    throwAttack(pokemon_targeted: Pokemon): Promise<any> {
        const prom = (resolve: any, reject: any)  => {
            setTimeout(() => {
                pokemon_targeted.health_point-=this.attack.dommage;
                this.log(this.name + ' attaque ' + pokemon_targeted.name);
                this.log('Il reste ' + pokemon_targeted.health_point + ' à ' + pokemon_targeted.name);
                resolve();
            }, 1500);
            return null;
        };
        return new Promise(prom);
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
    PLANTE,
    ELECTRIQUE,
    EAU,
}
