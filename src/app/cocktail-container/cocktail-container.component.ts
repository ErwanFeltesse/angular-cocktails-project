import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [];
  public selectedCocktail!: Cocktail;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.selectedCocktail = this.cocktails[0];
  }
  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }
}
