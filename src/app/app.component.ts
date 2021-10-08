import { Component } from '@angular/core';

export type TeamMember = {
  name: string;
  email: string;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  team: TeamMember[] = [
    {
      name: 'Yunior',
      email: 'yunior@squaads.com',
    },
    {
      name: 'Pedro',
      email: 'pedro@squaads.com',
    },
    {
      name: 'Borja',
      email: 'borja@squaads.com',
    },
  ];
}
