import {Pokemon} from './Pokemon';

export class Battle {
  public round: number;
  public bluePokemon: Pokemon;
  public redPokemon: Pokemon;
  public winner: Pokemon;

  constructor(redPokemon: Pokemon, bluePokemon: Pokemon) {
      this.round = 0;
      this.redPokemon = redPokemon;
      this.bluePokemon = bluePokemon;
  }

  priority(firstPokemon: Pokemon, secondPokemon: Pokemon) {
    return firstPokemon.speed > secondPokemon.speed ? firstPokemon : secondPokemon;
  }

  round() {
    if(this.priority(this.redPokemon, this.bluePokemon) === this.redPokemon) {
      this.redPokemon.throwAtack(this.bluePokemon);
      this.bluePokemon.throwAtack(this.redPokemon);
    }
    else {
      this.bluePokemon.throwAtack(this.redPokemon);
      this.redPokemon.throwAtack(this.bluePokemon);
    }
    this.round++;
  }
}
