import {Pokemon} from './Pokemon';

export class Battle {
  public roundCounter: number;
  public bluePokemon: Pokemon;
  public redPokemon: Pokemon;
  public winner: Pokemon;
  public isPaused: boolean;
  public currentPokemons: Pokemon[];

  constructor(redPokemon: Pokemon, bluePokemon: Pokemon) {
      this.roundCounter = 0;
      this.redPokemon = redPokemon;
      this.bluePokemon = bluePokemon;
      this.isPaused = false;
  }

  priority(firstPokemon: Pokemon, secondPokemon: Pokemon) {
    return firstPokemon.speed > secondPokemon.speed ? firstPokemon : secondPokemon;
  }

  round():Promise<any> {
    this.roundCounter++;
    if(this.priority(this.redPokemon, this.bluePokemon) === this.redPokemon) {
      return this.attackTrade(this.redPokemon, this.bluePokemon);
    }
    else {
      return this.attackTrade(this.bluePokemon, this.redPokemon);
    }
  }

  fight():Pokemon {
    if(this.redPokemon.health_point > 0 && this.bluePokemon.health_point > 0) {
      this.round().then(() => {
        if(this.isPaused) {
          return null;
        }
        this.fight();
      });
    }
    else {
      this.winner = this.redPokemon.health_point > 0 ? this.redPokemon : this.bluePokemon;
      console.log(this.winner.name + ' est le gagnant !');
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

  attackTrade(firstPokemon: Pokemon, secondPokemon: Pokemon):Promise<any> {
    return firstPokemon.throwAttack(secondPokemon).then(() => {
      if(secondPokemon.health_point > 0) {
          return secondPokemon.throwAttack(firstPokemon);
      }
    });
  }
}
