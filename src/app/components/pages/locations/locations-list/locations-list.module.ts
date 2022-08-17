import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsListRoutingModule } from './locations-list-routing.module';
import { LocationsListComponent } from './locations-list.component';


@NgModule({
  declarations: [
    LocationsListComponent
  ],
  imports: [
    CommonModule,
    LocationsListRoutingModule
  ]
})
export class LocationsListModule { }
