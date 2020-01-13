import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import { AgencyFormComponent } from './agency-form/agency-form.component';


const routes: Routes = [
  {
    path: "",
    component: AgenciesListComponent
  }, 
  {
    path: ":id",
    component: AgencyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
