import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import Loading from '@/components/Loading'
import FamilyMemberUi from '@/components/FamilyMemberUi'
import { generateRandomId } from '@/utils/func'

import { RecipeSuggestionResponse } from '@/types/api/recipe/suggestion/RecipeSuggestionResponse'
import { FamilyMember } from '@/types/FamilyMember'

type changeUserFavorProps = number | string | string[] | FamilyMember[]

interface UserFavor {
  days: number
  policy: string
  dislikeFood: string[]
  familyMembers: FamilyMember[]
}

export default function Home() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userFavor, setUserFavor] = useState<UserFavor>({
    days: 3,
    policy: '',
    dislikeFood: [],
    familyMembers: [{ id: generateRandomId(), gender: '男性', age: 20 }],
  })

  /****************************************
   * @function changeUserFavor
   * @description ユーザーの好みを変更する
   ****************************************/
  const changeUserFavor = (key: string, value: changeUserFavorProps) => {
    const newFavor = {
      ...userFavor,
      [key]: value,
    }
    setUserFavor(newFavor)
  }

  /****************************************
   * @function handleSuggest
   * @description レシピを提案してもらう
   ****************************************/
  const handleSuggest = async () => {
    try {
      setIsLoading(true)

      const apiUrl = `${process.env.VITE_API_URL}/recipe/suggestions`
      const headers = {
        'Content-Type': 'application/json',
      }

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          ...userFavor,
        }),
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data: RecipeSuggestionResponse = await res.json()
      navigate('/result', { state: { data } })
    } catch (e) {
      console.error('error:' + e)
    }
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Card className={cn('w-[480px] mx-auto')}>
      <CardHeader>
        <CardTitle>Recipeee</CardTitle>
        <CardDescription>
          レシピと、必要な食材をまとめて提案してもらおう。
        </CardDescription>
      </CardHeader>
      <CardContent className="text-left">
        <div className="mt-4">
          <Label className="text-md font-bold">
            何日分のレシピを提案してもらいますか？
          </Label>
          <Label className="block my-1 mb-2 text-gray-500">
            （3〜7日間の間で数字で入力してください。）
          </Label>
          <Input
            type="number"
            min={3}
            max={7}
            value={userFavor.days}
            onChange={(e) =>
              changeUserFavor('days', parseInt(e.currentTarget.value))
            }
          />
        </div>
        <div className="mt-6">
          <Label className="text-md font-bold">
            どんなレシピの特徴にしたいですか？
          </Label>
          <Label className="block my-1 mb-2 text-gray-500">
            (例：健康て栄養バランスの取れた食事、ダイエットにあった食事)
          </Label>
          <Input
            value={userFavor.policy}
            onChange={(e) => changeUserFavor('policy', e.currentTarget.value)}
          />
        </div>
        <div className="mt-6">
          <Label className="text-md font-bold">家族構成</Label>
          <Label className="block my-1 mb-2 text-gray-500">
            家族構成を入力してください。
          </Label>
          <FamilyMemberUi userFavor={userFavor} setUserFavor={setUserFavor} />
        </div>
        <div className="mt-6">
          <Label className="text-md font-bold">嫌いな食べ物</Label>
          <Label className="block my-1 mb-2 text-gray-500">
            (複数ある場合はカンマ区切りで入力してください。)
          </Label>
          <Textarea
            placeholder="入力例）ゆで卵,奈良漬け"
            value={userFavor.dislikeFood.join(',')}
            onChange={(e) =>
              changeUserFavor('dislikeFood', e.currentTarget.value.split(','))
            }
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          type="button"
          onClick={() => handleSuggest()}
        >
          レシピを提案してもらう
        </Button>
      </CardFooter>
    </Card>
  )
}
