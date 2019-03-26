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

  function priority(firstPokemon: Pokemon, secondPokemon: Pokemon) {
    return firstPokemon.speed > secondPokemon.speed ? firstPokemon : secondPokemon;
  }

  function round() {
    if(priority(redPokemon, bluePokemon) === redPokemon) {
      redPokemon.throwAtack(bluePokemon);
      bluePokemon.throwAtack(redPokemon);
    }
    else {
      bluePokemon.throwAtack(redPokemon);
      redPokemon.throwAtack(bluePokemon);
    }
    this.round++;
  }
}
