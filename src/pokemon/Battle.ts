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

  round() {
    if(this.priority(this.redPokemon, this.bluePokemon) === this.redPokemon) {
      this.attackTrade(this.redPokemon, this.bluePokemon);
    }
    else {
      this.attackTrade(this.bluePokemon, this.redPokemon);
    }
    this.roundCounter++;
  }

  fight() {
    while(this.redPokemon.health_point > 0 && this.bluePokemon.health_point > 0) {
      this.round();
      if(this.isPaused) {
        break;
      }
    }
    this.winner = this.redPokemon.health_point > 0 ? this.redPokemon : this.bluePokemon;
    console.log(this.winner.name + ' est le gagnant !');
    return this.winner;
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
    this.fight();
  }

  attackTrade(firstPokemon: Pokemon, secondPokemon: Pokemon) {
    firstPokemon.throwAttack(secondPokemon);
    if(secondPokemon.health_point > 0) {
      setTimeout(function(){
        secondPokemon.throwAttack(firstPokemon);
      }, 1000);
    }
  }
}
