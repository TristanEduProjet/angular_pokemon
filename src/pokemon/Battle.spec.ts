import {Pokemon, Type} from './Pokemon';
import {Attack} from './Move';
import {Battle} from './Battle';

describe('BattleTest', () => {
    test('dracofeu should destroy pika', () => {
        const fireBall = new Attack('Boule de feu', 10, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20, 'electric', 15);
        const dracofeu = new Pokemon('Dragon', 100, 30, [fireBall], 'electric');
        const pika = new Pokemon('pikapika', 70, 50, [eclair], 'electric');

        const winner = new Battle(dracofeu, pika).fight();

        expect(winner).toBe(dracofeu);
    });

    test('Pause method should set isPaused to true', () => {
        const fireBall = new Attack('Boule de feu', 10, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20, 'electric', 15);
        const dracofeu = new Pokemon('Dragon', 100, 30, [fireBall], 'electric');
        const pika = new Pokemon('pikapika', 70, 50, [eclair], 'electric');

        const battle = new Battle(dracofeu, pika);
        battle.pause();

        expect(battle.isPaused).toBeTruthy();
    });

    test('Resume should set isPaused to false', () => {
        const fireBall = new Attack('Boule de feu', 10, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20, 'electric', 15);
        const dracofeu = new Pokemon('Dragon', 100, 30, [fireBall], 'electric');
        const pika = new Pokemon('pikapika', 70, 50, [eclair], 'electric');

        const battle = new Battle(dracofeu, pika);
        battle.pause();
        battle.resume();

        expect(battle.isPaused).toBeFalsy();
    });

    test('Pika(speed:50) should attack first (dracofeu speed : 30)', () => {
        const fireBall = new Attack('Boule de feu', 10, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20, 'electric', 15);
        const dracofeu = new Pokemon('dracofeu', 100, 30, [fireBall], 'electric');
        const pika = new Pokemon('pikapika', 70, 50, [eclair], 'electric');

        const battle = new Battle(dracofeu, pika);

        expect(battle.priority(dracofeu, pika)).toBe(pika);
    });

    test('Pika(health_point:70) should take dommage by dracofeu(dommage : 30) and dracofeu(health_point:100) should take dommage by pika(dommage : 30)', () => {
        const fireBall = new Attack('Boule de feu', 10, 'electric', 30);
        const eclair = new Attack('Petit eclair', 20, 'electric', 15);
        const dracofeu = new Pokemon('dracofeu', 100, 30, [fireBall], 'electric');
        const pika = new Pokemon('pikapika', 70, 50, [eclair], 'electric');

        const battle = new Battle(dracofeu, pika);

        battle.attackTrade(pika, dracofeu);
        const expectedHealth = [pika.health_point, dracofeu.health_point];

        expect(expectedHealth).toEqual([40, 85]);
    });

    test('Attack(eclair initial_accuracy:20) hit if random value equals 0.1', () => {
        const eclair = new Attack('Petit eclair', 20, 'electric', 15);

        expect(eclair.isSuccessful(0.1)).toBeTruthy();
    });

    /*test('Attack(fireball initial_accuracy:10) hit if random value equals 0.2', () => {
        const fireBall = new Attack('Boule de feu', 10, 'electric', 30);

        expect(eclair.isSuccessful(0.2)).toBe(false);
    });*/

});
