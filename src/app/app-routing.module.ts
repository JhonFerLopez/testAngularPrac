import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { 
    path: 'home', 
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'character-list', 
    loadChildren: () => import('./components/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule) 
  }, 
  { 
    path: 'character-details/:id', 
    loadChildren: () => import('./components/pages/characters/character-details/character-details.module').then(m => m.CharacterDetailsModule) 
  },
  { 
    path: 'locations-list', 
    loadChildren: () => import('./components/pages/locations/locations-list/locations-list.module').then(m => m.LocationsListModule) },
  { 
    path: 'episodes-list', 
    loadChildren: () => import('./components/pages/episodes/episodes-list/episodes-list.module').then(m => m.EpisodesListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
