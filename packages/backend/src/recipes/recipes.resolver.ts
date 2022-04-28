import { Query, Resolver } from '@nestjs/graphql';
import { Recipe } from './models/recipe.model';

@Resolver(() => Recipe)
export class RecipesResolver {
  @Query(() => [Recipe])
  async recipes(): Promise<Recipe[]> {
    const recipes: Recipe[] = [
      { id: 'id', title: 'title', creationDate: new Date(), ingredients: [] },
    ];
    return recipes;
  }
}
