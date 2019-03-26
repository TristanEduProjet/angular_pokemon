import {Pokemon} from './Pokemon';

export class Battle {
  public roundCounter: number;
  public bluePokemon: Pokemon;
  public redPokemon: Pokemon;
  public winner: Pokemon;

  constructor(redPokemon: Pokemon, bluePokemon: Pokemon) {
      this.roundCounter = 0;
      this.redPokemon = redPokemon;
      this.bluePokemon = bluePokemon;
  }

  priority(firstPokemon: Pokemon, secondPokemon: Pokemon) {
    return firstPokemon.speed > secondPokemon.speed ? firstPokemon : secondPokemon;
  }

  round() {
    if(this.priority(this.redPokemon, this.bluePokemon) === this.redPokemon) {
      this.redPokemon.throwAttack(this.bluePokemon);
      if(this.bluePokemon.health_point > 0)
        this.bluePokemon.throwAttack(this.redPokemon);
    }
    else {
      this.bluePokemon.throwAttack(this.redPokemon);
      if(this.redPokemon.health_point > 0)
        this.redPokemon.throwAttack(this.bluePokemon);
    }
    this.roundCounter++;
  }

  fight() {
    while(this.redPokemon.health_point > 0 && this.bluePokemon.health_point > 0) {
      this.round();
    }
    this.winner = this.redPokemon.health_point > 0 ? this.redPokemon : this.bluePokemon;
    console.log(this.winner.name + ' est le gagnant !');
    return this.winner;
  }
}
