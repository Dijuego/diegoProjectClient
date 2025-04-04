import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTeamComponent } from './player-team.component';

describe('PlayerTeamComponent', () => {
  let component: PlayerTeamComponent;
  let fixture: ComponentFixture<PlayerTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
