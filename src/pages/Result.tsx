import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { DailyPlan, MealTime } from '@/types/api/recipe/suggestion/DailyPlan'

import { Recipe } from '@/components/result/Recipe'
import { RecipeDayIndex } from '@/components/result/RecipeDayIndex'

import testData from '@/sample.json'

export default function Result() {
  const location = useLocation()
  const [weeklyPlan] = useState<DailyPlan[]>(
    location.state || testData.weekly_plan,
  )

  const mealTimes: MealTime[] = Object.keys(testData.weekly_plan[0]).map(
    (key) => key,
  ) as MealTime[]

  return (
    <div className="text-left mb-8">
      {weeklyPlan.map((dayPlan, index) => (
        <div key={index}>
          <RecipeDayIndex dayIndex={index} />
          {mealTimes.map((mealTime) => (
            <Recipe key={mealTime} mealTime={mealTime} dayPlan={dayPlan} />
          ))}
        </div>
      ))}
    </div>
  )
}
