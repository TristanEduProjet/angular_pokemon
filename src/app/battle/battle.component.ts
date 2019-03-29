import { Component, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import {Pokedex} from '../../pokemon/Pokedex';

import {Battle, Pokemon, Type} from '../../pokemon';
import {Attack} from '../../pokemon/Move';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit, OnDestroy {
    logs: string[] = [];
    private battle: Battle;

    constructor(private logger: NGXLogger) { }

    ngOnInit() {
        this.battle = new Battle(
            /*new Pokemon('P1', 120, 80, 50, [new Attack('Atk1', 10, 'eau', 20)], 'eau'),
            new Pokemon('P2', 100, 90, 40, [new Attack('Atk2', 10, 'eau', 25)], 'eau')*/
            Pokedex.getPokemonFromId(2),
            Pokedex.getPokemonFromId(1)
        );
        this.battle.log = (msg: string) => this.log(msg);
        this.battle.initFight();
    }

    ngOnDestroy() {
        this.battle.pause(); // security
    }

    protected log(msg: string) {
        this.logs.push(msg);
    }
}
