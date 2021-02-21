import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {
  app_id = "5150a2d8";
  app_key= "a2b0f80bb864007be11e0267583a81ba";
  constructor(private httpClient:HttpClient) { }

  getAllRecipeByQuery(query:string):Observable<any>{
    return this.httpClient.get("https://api.edamam.com/search?q=" + query + "&app_id=" + this.app_id + "&app_key=" + this.app_key);
  }

  getRecipeByUri(uri:string):Observable<any>{
    return this.httpClient.get("https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23" + uri + "&app_id=" + this.app_id + "&app_key=" + this.app_key);
  }
}
