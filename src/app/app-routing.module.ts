import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent} from './page/page.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeCardComponent} from './recipe-card/recipe-card.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
  path:'',
  component:PageComponent
  },
  {
    path:'recipes/:query',
    component:RecipesComponent
  },
  {
    path:'recipeDetail/:uri',
    component:RecipeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
