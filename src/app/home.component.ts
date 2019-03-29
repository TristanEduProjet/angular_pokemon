import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private logger: NGXLogger) { }

    ngOnInit() {
    }

    newBattle() { // TODO temporaire pour implémentation
        this.router.navigate(['/battle']);
    }
}
