import { Component, OnInit, Input } from '@angular/core';
import {RecipeDataService} from '../recipe-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeListing:any;
  //Cannot find a differ supporting object '[object Object]' of type 'object'. NgFor only supports binding to Iterables such as Arrays.
  //the data is parsed as object here so we cannot use ngFor.
  constructor(private recipeDataService:RecipeDataService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let currentQuery = this.activatedRoute.snapshot.params.query;
    console.log(currentQuery);
    this.recipeDataService.getAllRecipeByQuery(currentQuery).subscribe((data:any)=>{
     this.recipeListing = data.hits;
      console.log(data.hits);
    });
  }

}
