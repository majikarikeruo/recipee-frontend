export const MealPlanIngredients = ({
  ingredients,
}: {
  ingredients: string
}) => {
  return (
    <div className="flex mb-2">
      <div className="mr-4 font-bold min-w-[120px]">必要な食材</div>
      {ingredients}
    </div>
  )
}
