import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test',
      'this is simple test',
      'https://image.shutterstock.com/image-photo/unrecognizable-woman-looking-recipes-cookbook-600w-1959865639.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
