import { Component } from '@angular/core';
import {Pokemon} from '../pokemon/Pokemon';
import {Attack} from '../pokemon/Move';
import {Battle} from '../pokemon/Battle';
import {Type} from '../pokemon/Pokemon';
import {Pokedex} from '../pokemon/Pokedex';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon Battle';

  constructor(private logger: NGXLogger) {
  }
}
