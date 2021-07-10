import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a Test", "https://media2.fdncms.com/clevescene/imager/u/blog/9647607/pizza.jpg?cb=1531348527")
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
