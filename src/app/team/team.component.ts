import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from '../app.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  constructor() {}

  @Input() teamMembers: TeamMember[];
  ngOnInit() {}
}
