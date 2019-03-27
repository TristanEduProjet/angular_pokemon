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

  test('Pause method should set isPaused to true', () => {
    let fireBall = new Attack('Boule de feu', 10, Type.ELECTRIQUE, 30);
    let eclair = new Attack('Petit eclair', 20, Type.ELECTRIQUE, 15);
    let dracofeu = new Pokemon('Dragon', 100, 30, fireBall, Type.ELECTRIQUE);
    let pika = new Pokemon('pikapika', 70, 50, eclair, Type.ELECTRIQUE);

    let battle = new Battle(dracofeu, pika);
    battle.pause();

    expect(battle.isPaused).toBe(true);
  });

  test('Resume should set isPaused to false', () => {
    let fireBall = new Attack('Boule de feu', 10, Type.ELECTRIQUE, 30);
    let eclair = new Attack('Petit eclair', 20, Type.ELECTRIQUE, 15);
    let dracofeu = new Pokemon('Dragon', 100, 30, fireBall, Type.ELECTRIQUE);
    let pika = new Pokemon('pikapika', 70, 50, eclair, Type.ELECTRIQUE);

    let battle = new Battle(dracofeu, pika);
    battle.pause();
    battle.resume();

    expect(battle.isPaused).toBe(false);
  });

  test('Pika(speed:50) should attack first (dracofeu speed : 30)', () => {
    let fireBall = new Attack('Boule de feu', 10, Type.ELECTRIQUE, 30);
    let eclair = new Attack('Petit eclair', 20, Type.ELECTRIQUE, 15);
    let dracofeu = new Pokemon('dracofeu', 100, 30, fireBall, Type.ELECTRIQUE);
    let pika = new Pokemon('pikapika', 70, 50, eclair, Type.ELECTRIQUE);

    let battle = new Battle(dracofeu, pika);

    expect(battle.priority(dracofeu, pika)).toBe(pika);
  });

  test('Pika(health_point:70) should take dommage by dracofeu(dommage : 30) and dracofeu(health_point:100) should take dommage by pika(dommage : 30)', () => {
    let fireBall = new Attack('Boule de feu', 10, Type.ELECTRIQUE, 30);
    let eclair = new Attack('Petit eclair', 20, Type.ELECTRIQUE, 15);
    let dracofeu = new Pokemon('dracofeu', 100, 30, fireBall, Type.ELECTRIQUE);
    let pika = new Pokemon('pikapika', 70, 50, eclair, Type.ELECTRIQUE);

    let battle = new Battle(dracofeu, pika);
    battle.attackTrade(pika,dracofeu);

    expect(dracofeu.health_point,pika.health_point).toBe(85,40);
  });

})
