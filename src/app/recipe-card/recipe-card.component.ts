import { Component, OnInit, Input } from '@angular/core';
import {RecipeDataService} from '../recipe-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipeCard:Partial<any>={};
  constructor(private recipeDataService:RecipeDataService, private router:Router) { }

  ngOnInit(): void {
  }

  getRecipe(uri:string){
    // console.log(uri);
    let hashIndex = uri.indexOf('#');
    this.router.navigate(['/recipeDetail',uri.substring(hashIndex+1)]);
    
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  //       this.router.navigate(['recipeDetail/'+uri])
  //     );
  }

}
