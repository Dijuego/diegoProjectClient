import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Team } from '../team';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  imports: [
    RouterLink
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  public teams: Team[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this.http.get<Team[]>(`${environment.baseUrl}api/Teams`).subscribe({
      next: result => this.teams = result,
      error: error => console.error(error)
    });
  }

}
