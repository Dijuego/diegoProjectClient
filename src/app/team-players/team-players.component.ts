import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeamPlayers } from '../team-players';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-team-players',
  imports: [
    RouterLink
  ],
  templateUrl: './team-players.component.html',
  styleUrl: './team-players.component.scss'
})
export class TeamPlayersComponent implements OnInit{
  public teamPlayers: TeamPlayers | undefined

  constructor(
    private http: HttpClient, 
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getTeamPlayers();
  }

  getTeamPlayers() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<TeamPlayers>(`${environment.baseUrl}api/Teams/GetTeamCount/${id}`).subscribe({
      next: result => this.teamPlayers = result,
      error: error => console.error(error)
    });
  }

}
