import { Component, ViewChild, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { SelectPokemonComponent } from './select-pokemon.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prepare-battle',
  templateUrl: './prepare-battle.component.html',
  styleUrls: ['./prepare-battle.component.css']
})
export class PrepareBattleComponent implements OnInit {
  name: string = 'my_super_name';
  @ViewChild('selectRed') selectRed: SelectPokemonComponent;
  @ViewChild('selectBlue') selectBlue: SelectPokemonComponent;

  constructor(private router: Router, private logger: NGXLogger) { }

  ngOnInit() {
  }

  startFight() {
    this.router.navigate(['/battle', this.selectRed.selected.id, this.selectBlue.selected.id]);
  }
}
