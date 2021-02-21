import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray,FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-search',
  templateUrl: './top-search.component.html',
  styleUrls: ['./top-search.component.css']
})
export class TopSearchComponent implements OnInit {
  searchFormGroup:any;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      query:this.fb.control('',Validators.required)
    })
  }

  submitForm(){
    // console.log(this.searchFormGroup.value.query)
    // this.router.navigateByUrl('/recipes/'+this.searchFormGroup.value.query)
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['recipes/'+this.searchFormGroup.value.query])
      );
  }

}
