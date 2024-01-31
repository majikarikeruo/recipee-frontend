import { UserFavor } from '@/types/UserFavor'

import { Button } from '@/components/ui/button'
import { FamilyMemberForm } from '@/components/FamilyMemberForm'

import { generateRandomId } from '@/utils/func'

const FamilyMemberUi = ({
  userFavor,
  setUserFavor,
}: {
  userFavor: UserFavor
  setUserFavor: React.Dispatch<React.SetStateAction<UserFavor>>
}) => {
  /*************************************
   * @function handleChangeMemberState
   * @param {number} index - 変更するメンバーのインデックス
   * @param {string} key - 変更するプロパティ名
   * @param {string | number} value - 新しい値
   * ***********************************/
  const handleChangeMemberState = (
    index: number,
    key: string,
    value: string | number,
  ) => {
    const updatedMembers = [...userFavor.familyMembers]
    updatedMembers[index][key] = value
    const updateUserFavor = { ...userFavor, familyMembers: updatedMembers }
    setUserFavor(updateUserFavor)
  }

  /********************************
   * @function handleAddMember
   * @return {*}
   ********************************/
  const handleAddMember = () => {
    const updatedMembers = [...userFavor.familyMembers]
    updatedMembers.push({ id: generateRandomId(), gender: '男性', age: 20 })
    const updateUserFavor = { ...userFavor, familyMembers: updatedMembers }
    setUserFavor(updateUserFavor)
  }

  /********************************
   * @function handleDeleteMember
   * @param {number} index - 変更するメンバーのインデックス
   ********************************/
  const handleDeleteMember = (index: number) => {
    const updatedMembers = [...userFavor.familyMembers]
    updatedMembers.splice(index, 1)
    const updateUserFavor = { ...userFavor, familyMembers: updatedMembers }
    setUserFavor(updateUserFavor)
  }

  return (
    <div>
      {userFavor.familyMembers.map((member, index) => (
        <FamilyMemberForm
          key={index}
          index={index}
          member={member}
          handleChangeMemberState={handleChangeMemberState}
          handleDeleteMember={() => handleDeleteMember(index)}
        />
      ))}
      <Button onClick={handleAddMember}>家族メンバーを追加</Button>
    </div>
  )
}

export default FamilyMemberUi
