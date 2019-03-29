import {Pokemon} from './Pokemon';

export class Battle {
    public roundCounter: number;
    public bluePokemon: Pokemon;
    public redPokemon: Pokemon;
    public winner: Pokemon;
    public isPaused: boolean;

    constructor(redPokemon: Pokemon, bluePokemon: Pokemon) {
        this.roundCounter = 0;
        this.redPokemon = redPokemon;
        this.bluePokemon = bluePokemon;
        this.isPaused = false;
    }

    priority(firstPokemon: Pokemon, secondPokemon: Pokemon) {
        return firstPokemon.speed > secondPokemon.speed ? firstPokemon : secondPokemon;
    }

    round(): Promise<any> {
        this.roundCounter++;
        if (this.priority(this.redPokemon, this.bluePokemon) === this.redPokemon) {
            return this.attackTrade(this.redPokemon, this.bluePokemon);
        } else {
            return this.attackTrade(this.bluePokemon, this.redPokemon);
        }
    }

    initFight() {
      this.displayPokemons();
      this.fight();
    }

    displayPokemons() {
      this.log(this.redPokemon.name + ' : vie = ' + this.redPokemon.health_point + ', def = ' + this.redPokemon.def + ', speed = ' + this.redPokemon.speed);
      this.log(this.bluePokemon.name + ' : vie = ' + this.bluePokemon.health_point + ', def = ' + this.bluePokemon.def + ', speed = ' + this.bluePokemon.speed);
    }

    fight(): Pokemon {
        if (this.redPokemon.health_point > 0 && this.bluePokemon.health_point > 0) {
            this.round().then(() => {
                if (this.isPaused) {
                    return;
                }
                this.fight();
            });
        } else {
            this.winner = this.redPokemon.health_point > 0 ? this.redPokemon : this.bluePokemon;
            this.log(this.winner.name + ' est le gagnant !');
            return this.winner;
        }
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
        this.fight();
    }

    attackTrade(firstPokemon: Pokemon, secondPokemon: Pokemon): Promise<any> {
        return firstPokemon.throwAttack(secondPokemon).then(() => {
            if (secondPokemon.health_point > 0) {
                return secondPokemon.throwAttack(firstPokemon);
            }
        });
    }

    log(msg: string) {
        console.log(msg);
    }
}
