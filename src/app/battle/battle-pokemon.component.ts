import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import {Pokemon} from '../../pokemon';
import {Pokedex} from '../../pokemon/Pokedex';

@Component({
    selector: 'app-battle-pokemon',
    templateUrl: './battle-pokemon.component.html',
    styleUrls: ['./battle-pokemon.component.css']
})
export class BattlePokemonComponent implements OnInit {
    @Input() pokemon: Pokemon;
    @Output() readonly log = new EventEmitter<string>();
    /*@HostBinding*/@Input('class') private elClasses: string;
    protected imgUrl: string;

    constructor(private logger: NGXLogger) { }

    ngOnInit() {
        this.pokemon.log = (msg) => {
            this.log.emit(msg);
        };
        this.imgUrl = 'http://www.pokestadium.com/sprites/xy/' + (this.elClasses.split(' ').find(i => 'player' === i) ? 'back/' : '') + Pokedex.getPokemonEngName(this.pokemon.id) + '.gif';
    }
}
