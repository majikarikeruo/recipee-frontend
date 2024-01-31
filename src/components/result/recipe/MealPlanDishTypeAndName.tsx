import { DishType } from '@/types/api/recipe/suggestion/DailyPlan'

export const MealPlanDishTypeAndName = ({
  recipeName,
  dishType,
}: {
  recipeName: string
  dishType: DishType
}) => {
  return (
    <div className="mb-6">
      <h4 className="mr-4 mb-2 font-bold min-w-[120px]">{dishType}</h4>
      <p>{recipeName}</p>
    </div>
  )
}
