import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamMemberComponent } from './team-member/team-member.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TeamComponent, TeamMemberComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
