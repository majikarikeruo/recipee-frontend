export type MealTime = 'morning' | 'lunch' | 'dinner'
export type DishType = 'staple_food' | 'main_dish' | 'side_dish'

export interface DailyPlan {
  morning: Meal
  lunch: Meal
  dinner: Meal
}

interface Dish {
  name: string
  how_to_cook: string
  ingredients: string
}

interface Meal {
  staple_food: Dish
  main_dish: Dish
  side_dish: Dish
}
