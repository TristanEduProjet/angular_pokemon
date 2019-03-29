import {Pokemon, Type} from './Pokemon';
import {Attack} from './Move';
import {Battle} from './Battle';

describe('BattleTest', () => {
    // test('dracofeu should destroy pika', () => {
    //     const fireBall = new Attack('Boule de feu', 10, 0, 'electric', 30);
    //     const eclair = new Attack('Petit eclair', 20, 0, 'electric', 15);
    //     const dracofeu = new Pokemon('Dragon', 100, 0,30, [fireBall], 'electric');
    //     const pika = new Pokemon('pikapika', 70, 0, 50, [eclair], 'electric');
    //
    //     const winner = new Battle(dracofeu, pika).fight();
    //
    //     expect(winner).toBe(dracofeu);
    // });

    test('Pause method should set isPaused to true', () => {
        const fireBall = new Attack('Boule de feu', 10,0, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);
        const dracofeu = new Pokemon('Dragon', 100,0, 30, [fireBall], 'electric');
        const pika = new Pokemon('pikapika', 70,0, 50, [eclair], 'electric');

        const battle = new Battle(dracofeu, pika);
        battle.pause();

        expect(battle.isPaused).toBeTruthy();
    });

    test('Resume should set isPaused to false', () => {
        const fireBall = new Attack('Boule de feu', 10,0, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);
        const dracofeu = new Pokemon('Dragon', 100,0, 30, [fireBall], 'electric');
        const pika = new Pokemon('pikapika', 70,0, 50, [eclair], 'electric');

        const battle = new Battle(dracofeu, pika);
        battle.pause();
        battle.resume();

        expect(battle.isPaused).toBeFalsy();
    });

    test('Pika(speed:50) should attack first (dracofeu speed : 30)', () => {
        const fireBall = new Attack('Boule de feu', 10,0, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);
        const dracofeu = new Pokemon('dracofeu', 100,0, 30, [fireBall], 'electric');
        const pika = new Pokemon('pikapika', 700,0, 50, [eclair], 'electric');

        const battle = new Battle(dracofeu, pika);

        expect(battle.priority(dracofeu, pika)).toBe(pika);
    });

    // test('Pika(health_point:70) should take dommage by dracofeu(dommage : 30) and dracofeu(health_point:100) should take dommage by pika(dommage : 30)', () => {
    //     const fireBall = new Attack('Boule de feu', 10,0, 'electric', 30);
    //     const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);
    //     const dracofeu = new Pokemon('dracofeu', 100,0, 30, [fireBall], 'electric');
    //     const pika = new Pokemon('pikapika', 70,0, 50, [eclair], 'electric');
    //
    //     const battle = new Battle(dracofeu, pika);
    //
    //     battle.attackTrade(pika, dracofeu);
    //     const expectedHealth = [pika.health_point, dracofeu.health_point];
    //
    //     expect(expectedHealth).toEqual([40, 85]);
    // });

    test('Attack(eclair initial_accuracy:20) hit if random value equals 10', () => {
        const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);

        expect(eclair.isSuccessful(10)).toBeTruthy();
    });

    test('Attack(fireball initial_accuracy:10) hit if random value equals 20', () => {
        const fireBall = new Attack('Boule de feu', 10,0, 'electric', 30);

        expect(fireBall.isSuccessful(20)).toBeFalsy();
    });

    test('Attack(fireball initial_accuracy:20) hit if random value equals 20', () => {
        const fireBall = new Attack('Boule de feu', 20,0, 'electric', 30);

        expect(fireBall.isSuccessful(20)).toBeTruthy();
    });
});

describe('a hit can be transformed in critical hit', () => {
  test('a hit is transformed in critical if his random value is equals to 0.04', () => {
    const ferocerie = new Attack('Ferocerie', 40,1, 'electric', 100);

    expect(ferocerie.isCritical(0.04)).toBeTruthy();
  });

  test('a hit is transformed in critical if his random value is equals to 0.08', () => {
    const ferocerie = new Attack('Ferocerie', 40,1, 'electric', 100);

    expect(ferocerie.isCritical(0.8)).toBeFalsy();
  });

    test('a critical hit is bigger than normal hit', () => {
      const fireBall = new Attack('Boule de feu', 20,1, 'electric', 30);

      var degat=fireBall.enhanceDammage();
      expect(fireBall.dommage<degat).toBeTruthy();
    });

    test('a critical hit is bigger than normal hit', () => {
      const ferocerie = new Attack('Ferocerie', 40,1, 'electric', 100);

      var degat=ferocerie.enhanceDammage();
      expect(ferocerie.dommage<degat).toBeTruthy();
    });
});

describe('defence', () => {
  //Ajouter de la defence a chaque pokemon.
    test('a pokemon (pika) who was hiten who has a def(15) must reduce the dommage(30)', () => {
        const fireBall = new Attack('Boule de feu', 20,1, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);
        const pokemon_hiten = new Pokemon('pikapika', 70,15, 50, [eclair], 'electric');

        var effectiveDammage=pokemon_hiten.reduceDammage(fireBall.dommage)
        expect(effectiveDammage).toBe(15);
    });

    test('a pokemon (pika) who was hiten who has a def(45) must cancel the dommage(30)', () => {
        const fireBall = new Attack('Boule de feu', 20,1, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);
        const pokemon_hiten = new Pokemon('pikapika', 70,45, 50, [eclair], 'electric');

        var effectiveDammage=pokemon_hiten.reduceDammage(fireBall.dommage);
        expect(effectiveDammage).toBe(0);
    });

    test('a pokemon (pika) who was hiten by low dommage(30) who has a def(45) not health', () => {
        const fireBall = new Attack('Boule de feu', 20,1, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);
        const pokemon_hiten = new Pokemon('pikapika', 70,45, 50, [eclair], 'electric');

        var effectiveDammage=pokemon_hiten.reduceDammage(fireBall.dommage);
        expect(effectiveDammage).toBe(0);
    });

    test('a pokemon (pika) who was hiten by low dommage(10) who has a def(10) not health', () => {
        const fireBall = new Attack('Boule de feu', 20,1, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);
        const pokemon_hiten = new Pokemon('pikapika', 70,45, 50, [eclair], 'electric');


        var effectiveDammage=pokemon_hiten.reduceDammage(fireBall.dommage);
        expect(effectiveDammage).toBe(0);
    });

    test('a pokemon (bulbizarre) who was hiten by a big dommage(50) who has a def(49)', () => {
        const fireBall = new Attack('Boule de feu', 20,1, 'electric', 50);
        const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);
        const pokemon_hiten = new Pokemon('bulbizarre', 45,49, 45, [eclair], 'electric');


        var effectiveDammage=pokemon_hiten.reduceDammage(fireBall.dommage);
        expect(effectiveDammage).toBe(1);
    });
});

describe('takeDammage', () => {
  test('a pokemon take 50 dammage', () => {
      const fireBall = new Attack('Boule de feu', 20,1, 'electric', 50);
      const eclair = new Attack('Petit eclair', 20,0, 'electric', 15);
      const pokemon_hiten = new Pokemon('bulbizarre', 45,49, 45, [eclair], 'electric');

      pokemon_hiten.takeDammage(30);
      expect(pokemon_hiten.health_point).toBe(15);
  });
});
