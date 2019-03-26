export class Battle {
  public round: number
  public bluePokemon: Pokemon
  public redPokemon: Pokemon
  public winner: Pokemon

  constructor(redPokemon: Pokemon, bluePokemon: Pokemon) {
      this.round = 0
      this.redPokemon = redPokemon
      this.bluePokemon = bluePokemon
  }

  function priority(firstPokemon: Pokemon, secondPokemon: Pokemon) {
    return firstPokemon.speed > secondPokemon ? firstPokemon : secondPokemon;
  }
}
