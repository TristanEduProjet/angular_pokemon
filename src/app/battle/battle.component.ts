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
    public selectedRedId: number;
    public selectBlueId: number;

    private route: ActivatedRoute;
    private router: Router;
    private service: HeroService;

    /*@ViewChild('logsDiv') logsDiv;
    @ViewChild(NgScrollbar) scrollbarRef: NgScrollbar;*/

    constructor(private logger: NGXLogger, private router: Router) {
      this.hero$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.service.getHero(params.get('id')))
      );
    }

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

    ngAfterViewInit(): void {
        // this.scrollbarRef.scrollable.elementScrolled().subscribe(e => this.logger.debug(e));
    }

    protected log(msg: string) {
        this.logs.push(msg);
    }
}
