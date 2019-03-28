import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlePokemonComponent } from './battle-pokemon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerTestingModule } from 'ngx-logger';

describe('BattlePokemonComponent', () => {
  let component: BattlePokemonComponent;
  let fixture: ComponentFixture<BattlePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule, LoggerTestingModule],
        declarations: [ BattlePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
