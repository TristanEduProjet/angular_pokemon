import { Component, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

import {Battle, Pokemon, Type} from '../../pokemon';
import {Attack} from '../../pokemon/Move';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent extends Battle implements OnInit, OnDestroy {
    logs: string[] = [];

    constructor(private logger: NGXLogger) {
        super(
            new Pokemon('P1', 120, 80, new Attack('Atk1', 10, Type.EAU, 20), Type.EAU),
            new Pokemon('P2', 100, 90, new Attack('Atk2', 10, Type.EAU, 25), Type.EAU)
        );
    }

    ngOnInit() {
        this.fight();
    }

    ngOnDestroy() {
        this.pause(); // security
    }

    protected log(msg: string) {
        this.logs.push(msg);
    }
}
