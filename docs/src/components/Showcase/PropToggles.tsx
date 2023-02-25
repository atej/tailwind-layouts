import clsx from 'clsx'
import ToggleButton from '../ToggleButton'
import Asterisk from '../icons/Asterisk'
import Check from '../icons/Check'
import type { ClassNamesState, RequiredClassNames } from '../../types'

export default function PropToggles({
  propClassNames,
  setPropClassNames,
  requiredClassNames,
}: Props) {
  const toggleableClassNames = Object.entries(propClassNames).filter(
    ([className]) => !requiredClassNames?.includes(className),
  )

  return (
    <div className="prose-code:before:content-none prose-code:after:content-none">
      <div>
        <h4>
          Required{' '}
          {requiredClassNames?.length &&
          requiredClassNames?.length > 1
            ? 'classes'
            : 'class'}
        </h4>
        <div className="cluster-l cluster-l_space-3">
          {requiredClassNames?.map((className, i) => (
            <ToggleButton
              key={i}
              className="px-3 py-1.5 border-2 border-primary-500 border-dashed cursor-not-allowed relative"
              isDisabled
            >
              <code>{className}</code>
              <span
                aria-hidden="true"
                className="icon-l bg-primary-500 text-gray-900 p-1 rounded-full text-xs absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
              >
                <Asterisk />
              </span>
            </ToggleButton>
          ))}
        </div>
      </div>
      <div>
        <h4>Prop classes</h4>
        <div className="cluster-l cluster-l_space-3">
          {toggleableClassNames.map(([className, isSelected], i) => (
            <ToggleButton
              key={i}
              className={clsx(
                'px-3 py-1.5 border-2 whitespace-nowrap inline-block relative',
                {
                  'border-primary-500': isSelected,
                  'border-gray-600 hover:border-gray-500':
                    !isSelected,
                },
              )}
              isSelected={isSelected}
              onChange={() => {
                const newClassNames = { ...propClassNames }
                newClassNames[className] = !isSelected
                setPropClassNames(newClassNames)
              }}
            >
              <code>{className}</code>
              {isSelected && (
                <span
                  aria-hidden="true"
                  className="icon-l bg-primary-500 text-gray-900 p-1 rounded-full text-xs absolute top-0 right-0 translate-x-[calc(50%-2px)] -translate-y-[calc(50%-1px)]"
                >
                  <Check />
                </span>
              )}
            </ToggleButton>
          ))}
        </div>
      </div>
    </div>
  )
}

type Props = {
  propClassNames: ClassNamesState
  setPropClassNames: (classNames: ClassNamesState) => void
  requiredClassNames?: RequiredClassNames
}
