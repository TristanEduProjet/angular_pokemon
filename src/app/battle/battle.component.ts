import { Component, ViewChild, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { NgScrollbar } from 'ngx-scrollbar';
import { switchMap } from 'rxjs/operators';

import {Pokedex} from '../../pokemon/Pokedex';
import {Battle, Pokemon, Type} from '../../pokemon';
import {Attack} from '../../pokemon/Move';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit, OnDestroy, AfterViewInit {
    logs: string[] = [];
    private battle: Battle;
    /*@ViewChild('logsDiv') logsDiv;
    @ViewChild(NgScrollbar) scrollbarRef: NgScrollbar;*/

    constructor(private logger: NGXLogger, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.battle = new Battle(Pokedex.getPokemonFromId(this.route.snapshot.params['p1']), Pokedex.getPokemonFromId(this.route.snapshot.params['p2']));
        this.battle.log = (msg: string) => this.log(msg);
        this.battle.initFight();
    }

    ngOnDestroy() {
        this.battle.pause(); // security
    }

    ngAfterViewInit(): void {
        // this.scrollbarRef.scrollable.elementScrolled().subscribe(e => this.logger.debug(e));
    }

    protected log(msg: string) {
        this.logs.push(msg);
    }
}
