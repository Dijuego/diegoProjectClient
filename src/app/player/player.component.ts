import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Player } from '../player';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { PlayerTeam } from '../player-team';

@Component({
  selector: 'app-player',
  imports: [
    RouterLink
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  public players: PlayerTeam[] =[];

  constructor(private http: HttpClient) {}
  ngOnInit(): void{
    this.getPlayers();
  }

  getPlayers(){
    this.http.get<PlayerTeam[]>(`${environment.baseUrl}api/Players/PlayersTeam`).subscribe({
      next: result => this.players = result,
      error: error => console.error(error)
    });
  }
}
