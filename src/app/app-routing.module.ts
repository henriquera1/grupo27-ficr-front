import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcompanharComponent } from './pages/acompanhar/acompanhar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';

const routes: Routes = [
  {path:'hydrate',component:DashboardComponent},
  {path:'reportar',component:EnderecoComponent},
  {path:'acompanhar',component:AcompanharComponent},
  {path:'', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
