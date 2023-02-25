import { useMemo, useState } from 'react'
import clsx from 'clsx'
import range from 'just-range'
import Block from '../Block'
import Container from './Container'
import PropToggles from './PropToggles'
import NarrowToggle from './NarrowToggle'
import HighContrastToggle from './HighContrastToggle'
import type {
  ClassNamesState,
  ShowcaseProps,
  ShowcaseActionName,
} from '../../types'
import type { ReactElement } from 'react'
import type { ActionToggleProps } from './ActionToggle'

export default function Showcase({
  demoClassNames,
  requiredClassNames,
  blockCount = 3,
  customBlocks,
  hasCustomContent,
  actions,
  children,
}: Props) {
  const [propClassNames, setPropClassNames] = useState(demoClassNames)
  const [actionClassNames, setActionClassNames] =
    useState<ClassNamesState>({})
  const actionButtons: Record<
    ShowcaseActionName,
    (props: ActionToggleProps) => JSX.Element
  > = useMemo(
    () => ({
      narrow: NarrowToggle,
      highContrast: HighContrastToggle,
    }),
    [],
  )

  const otherClassNames = useMemo<ClassNamesState>(
    () => ({
      'scrollbar-[theme(colors.gray.500)]': true,
      'will-change-[width]': !!actions?.includes('narrow'),
    }),
    [],
  )

  return (
    <div className="max-w-measure">
      <div
        className={clsx(
          'bg-gray-800 frame-l frame-l_aspect-[5/4] sm:frame-l_aspect-[16/10] p-1 not-prose',
          {
            'relative z-[80]': 'imposter-l' in propClassNames,
          },
        )}
      >
        {children && hasCustomContent ? (
          // hack to get around `<astro-slot>` being undesirable as the outermost element of a `<slot />`
          <Container
            {...{
              propClassNames,
              setPropClassNames,
              actionClassNames,
              otherClassNames,
            }}
            innerHTML={{
              __html: (children as ReactElement).props.value,
            }}
          />
        ) : (
          <Container
            {...{
              propClassNames,
              setPropClassNames,
              actionClassNames,
              otherClassNames,
            }}
          >
            {customBlocks
              ? customBlocks.map((classNames, i) => (
                  <Block key={i} classNames={classNames} />
                ))
              : range(blockCount).map((i) => <Block key={i} />)}
          </Container>
        )}
      </div>

      {actions && (
        <div>
          <h4>Simulate</h4>
          <div className="cluster-l cluster-l_space-3">
            {actions.map((action, i) => {
              const ActionButton = actionButtons[action]
              return (
                <ActionButton
                  key={i}
                  {...{ actionClassNames, setActionClassNames }}
                />
              )
            })}
          </div>
        </div>
      )}

      <PropToggles
        {...{ propClassNames, setPropClassNames, requiredClassNames }}
      />
    </div>
  )
}

type Props = ShowcaseProps & {
  children?: React.ReactNode
}
