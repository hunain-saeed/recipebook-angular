import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test 1',
      'this is simple test',
      'https://image.shutterstock.com/image-photo/unrecognizable-woman-looking-recipes-cookbook-600w-1959865639.jpg'
    ),
    new Recipe(
      'A Test 2',
      'this is simple test',
      'https://image.shutterstock.com/image-photo/unrecognizable-woman-looking-recipes-cookbook-600w-1959865639.jpg'
    ),
  ];


  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
