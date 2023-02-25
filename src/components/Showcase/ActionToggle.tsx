import clsx from 'clsx'
import { useMemo } from 'react'
import ToggleButton from '../ToggleButton'
import Check from '../icons/Check'
import type { ClassNamesState } from '../../types'

export default function ActionToggle({
  actionClassNames,
  setActionClassNames,
  actionClassName,
  label,
  Icon,
}: BaseProps) {
  return (
    <ToggleButton
      isSelected={!!actionClassNames[actionClassName]}
      className={clsx(
        'px-3 py-2.5 border-2 text-gray-200 font-medium icon-l relative',
        {
          'border-gray-600 hover:border-gray-500':
            !!!actionClassNames[actionClassName],
          'border-secondary-500': !!actionClassNames[actionClassName],
        },
      )}
      onChange={() => {
        const newClassNames = { ...actionClassNames }
        newClassNames[actionClassName] =
          !actionClassNames[actionClassName]
        setActionClassNames(newClassNames)
      }}
    >
      <span className="icon-l_icon">
        <Icon />
      </span>
      <span className="text-sm">{label}</span>
      {!!actionClassNames[actionClassName] && (
        <span
          aria-hidden="true"
          className="icon-l bg-secondary-500 text-gray-900 p-1 rounded-full text-xs absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
        >
          <Check />
        </span>
      )}
    </ToggleButton>
  )
}

export type BaseProps = {
  actionClassNames: ClassNamesState
  setActionClassNames: (classNames: ClassNamesState) => void
  actionClassName: string
  label: string
  Icon: () => JSX.Element
}

export type ActionToggleProps = Pick<
  BaseProps,
  'actionClassNames' | 'setActionClassNames'
>
