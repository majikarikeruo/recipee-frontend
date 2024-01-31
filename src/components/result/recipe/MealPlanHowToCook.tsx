export const MealPlanHowToCook = ({ howToCook }: { howToCook: string }) => {
  return (
    <div className="flex mb-2">
      <div className="mr-4 font-bold min-w-[120px]">作り方</div>{' '}
      <div>
        {howToCook.split('\n').map((cookingWay, index) => (
          <span key={index} style={{ whiteSpace: 'pre-line' }}>
            {cookingWay}
            <br />
          </span>
        ))}
      </div>
    </div>
  )
}
