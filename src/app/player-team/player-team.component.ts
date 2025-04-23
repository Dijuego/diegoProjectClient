import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlayerTeam } from '../player-team';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-player-team',
  imports: [
    RouterLink
  ],
  templateUrl: './player-team.component.html',
  styleUrl: './player-team.component.scss'
})
export class PlayerTeamComponent {
  public playerTeam: PlayerTeam | undefined

  constructor(
    private http: HttpClient, 
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getPlayerTeam();
  }

  getPlayerTeam() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<PlayerTeam>(`${environment.baseUrl}api/Players/PlayerTeam/${id}`).subscribe({
      next: result => this.playerTeam = result,
      error: error => console.error(error)
    });
  }
}
