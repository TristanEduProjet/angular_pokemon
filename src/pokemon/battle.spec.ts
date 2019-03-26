import {Pokemon} from './Pokemon'
import {Attack} from './Move'
import {Battle} from './Battle'
import {Type} from './Pokemon'

describe('BattleTest', () => {
  test('dracofeu should destroy pika', () => {
    let fireBall = new Attack('Boule de feu', 10, Type.ELECTRIQUE, 30);
    let eclair = new Attack('Petit eclair', 20, Type.ELECTRIQUE, 15);
    let dracofeu = new Pokemon('Dragon', 100, 30, fireBall, Type.ELECTRIQUE);
    let pika = new Pokemon('pikapika', 70, 50, eclair, Type.ELECTRIQUE);

    let battle = new Battle(dracofeu, pika);

    expect(battle.fight()).toBe(dracofeu);
  });
})
