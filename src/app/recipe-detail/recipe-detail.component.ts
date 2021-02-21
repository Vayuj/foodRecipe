import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RecipeDataService} from '../recipe-data.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails:any;
  constructor(private activatedRoute:ActivatedRoute, private recipeDataService:RecipeDataService) { }

  ngOnInit(): void {
    let currentUri = this.activatedRoute.snapshot.params.uri;
    //console.log(currentUri);
    this.recipeDataService.getRecipeByUri(currentUri).subscribe((data)=>{
      this.recipeDetails=data[0];
      //console.log(data);
    })
  }

}
