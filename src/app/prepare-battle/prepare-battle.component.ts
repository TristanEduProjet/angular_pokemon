import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prepare-battle',
  templateUrl: './prepare-battle.component.html',
  styleUrls: ['./prepare-battle.component.css']
})
export class PrepareBattleComponent implements OnInit {
  name: string = 'my_super_name';

  constructor() { }

  ngOnInit() {
  }

}