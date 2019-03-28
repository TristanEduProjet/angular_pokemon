import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import {Pokemon} from '../../pokemon';

@Component({
    selector: 'app-battle-pokemon',
    templateUrl: './battle-pokemon.component.html',
    styleUrls: ['./battle-pokemon.component.css']
})
export class BattlePokemonComponent implements OnInit {
    @Input() pokemon: Pokemon;
    @Output() readonly log = new EventEmitter<string>();

    constructor(private logger: NGXLogger) { }

    ngOnInit() {
        this.pokemon.log = (msg) => {
            this.log.emit(msg); // TODO go to ui logs
        };
    }
}
