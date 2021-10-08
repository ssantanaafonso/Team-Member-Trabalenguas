import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from '../app.component';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css'],
})
export class TeamMemberComponent implements OnInit {
  constructor() {}
  @Input() teamMember: TeamMember;
  ngOnInit() {}
}
