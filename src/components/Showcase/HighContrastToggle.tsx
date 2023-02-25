import ActionToggle from './ActionToggle'
import Contrast from '../icons/Contrast'
import type { ActionToggleProps } from './ActionToggle'

export default function HighContrastToggle({
  actionClassNames,
  setActionClassNames,
}: ActionToggleProps) {
  return (
    <ActionToggle
      actionClassName="!bg-black !text-white !outline-white"
      Icon={Contrast}
      label="High Contrast"
      {...{ actionClassNames, setActionClassNames }}
    />
  )
}
