import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesListRoutingModule } from './episodes-list-routing.module';
import { EpisodesListComponent } from './episodes-list.component';


@NgModule({
  declarations: [
    EpisodesListComponent
  ],
  imports: [
    CommonModule,
    EpisodesListRoutingModule
  ]
})
export class EpisodesListModule { }
