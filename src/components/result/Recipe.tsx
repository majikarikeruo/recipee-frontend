import {
  DailyPlan,
  MealTime,
  DishType,
} from '@/types/api/recipe/suggestion/DailyPlan'

import { MealPlanDishTypeAndName } from '@/components/result/recipe/MealPlanDishTypeAndName'
import { MealPlanHowToCook } from '@/components/result/recipe/MealPlanHowToCook'
import { MealPlanIngredients } from '@/components/result/recipe/MealPlanIngredients'

export const Recipe = ({
  mealTime,
  dayPlan,
}: {
  mealTime: MealTime
  dayPlan: DailyPlan
}) => {
  const dishTypes: DishType[] = Object.keys(dayPlan[mealTime]) as DishType[]

  return (
    <div className="my-6 ">
      <h3 className="mb-4 font-bold">{mealTime}</h3>
      {dishTypes.map((dishType) => {
        const recipe = dayPlan[mealTime][dishType]

        return (
          <div
            key={dishType}
            className="mb-4 ml-7 mt-2 border border-solid border-gray-200 p-4"
          >
            <MealPlanDishTypeAndName
              recipeName={recipe.name}
              dishType={dishType}
            />
            <MealPlanHowToCook howToCook={recipe.how_to_cook} />
            <MealPlanIngredients ingredients={recipe.ingredients} />
          </div>
        )
      })}
    </div>
  )
}
