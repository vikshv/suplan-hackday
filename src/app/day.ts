export class ProductData {
    name: string;
}

export class RecipeData {
    products: Array<any>;
}

export class RepastData {
    name: string;
    recipes: Array<any>;
    products: Array<any>;
}

export class DayData {
    index: number;
    date: number;
    weight: string;
    calories: string;

    repasts: Array<any>;
    recipes: Array<any>;
    products: Array<any>;
}
