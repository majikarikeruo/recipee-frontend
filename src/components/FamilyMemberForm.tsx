import { FamilyMember } from '@/types/FamilyMember'

import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const FamilyMemberForm = ({
  index,
  member,
  handleChangeMemberState,
  handleDeleteMember,
}: {
  index: number
  member: FamilyMember
  handleChangeMemberState: (
    index: number,
    key: string,
    value: number | string,
  ) => void
  handleDeleteMember: () => void
}) => (
  <div className="mb-4 flex items-center">
    <Label className="flex items-center">
      <span className="mr-2">年齢</span>
      <Input
        placeholder="年齢"
        className="w-20 mr-4"
        type="number"
        value={member.age}
        onChange={(e) =>
          handleChangeMemberState(index, 'age', parseInt(e.currentTarget.value))
        }
      />
    </Label>
    <Select
      defaultValue={member.gender}
      onValueChange={(e) => handleChangeMemberState(index, 'gender', e)}
    >
      <SelectTrigger className="w-[200px] mr-4">
        <SelectValue placeholder="性別を選択してください" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="男性">男性</SelectItem>
        <SelectItem value="女性">女性</SelectItem>
      </SelectContent>
    </Select>
    <Button onClick={handleDeleteMember}>削除</Button>
  </div>
)
