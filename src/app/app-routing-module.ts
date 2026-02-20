import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ListOfProviders } from './list-providers/list-providers';

const routes: Routes = [
  {
    path: 'users', /* spelling matters */
    component: Home
  },
  {
    path: 'providers',
    component: ListOfProviders
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
