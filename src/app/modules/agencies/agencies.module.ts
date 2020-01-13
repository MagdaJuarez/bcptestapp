import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import { SharedModule } from '../shared/shared.module';
import { AgencyCardComponent } from './agency-card/agency-card.component';
import { AgencyFormComponent } from './agency-form/agency-form.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    AgenciesListComponent, 
    AgencyDetailsComponent, 
    AgencyCardComponent, AgencyFormComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class AgenciesModule { }
