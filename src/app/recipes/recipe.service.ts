import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test 1',
      'this is simple test',
      'https://image.shutterstock.com/image-photo/unrecognizable-woman-looking-recipes-cookbook-600w-1959865639.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A Test 2',
      'this is simple test',
      'https://image.shutterstock.com/image-photo/unrecognizable-woman-looking-recipes-cookbook-600w-1959865639.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // if we directly return recipes array it will return reference
    // to return new array (deep copy)
    // use slice which will return new array.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
