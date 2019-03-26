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
      this.bluePokemon.throwAttack(this.redPokemon);
    }
    else {
      this.bluePokemon.throwAttack(this.redPokemon);
      this.redPokemon.throwAttack(this.bluePokemon);
    }
    this.roundCounter++;
  }
}
