import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MembersTableComponent } from './members-table/members-table.component';
import { PendingInvitationsTableComponent } from './pending-invitations-table/pending-invitations-table.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    MembersTableComponent,
    PendingInvitationsTableComponent,
    SidebarComponent,
    DashboardComponent,
    ChannelDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
