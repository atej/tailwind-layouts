import clsx from 'clsx'
import { useMemo } from 'react'
import type { ClassNamesState } from '../../types'

export default function Container({
  propClassNames,
  setPropClassNames,
  actionClassNames,
  otherClassNames,
  children,
  innerHTML,
}: Props) {
  const isFrame = useMemo(
    () => 'frame-l' in propClassNames,
    [propClassNames],
  )
  const isReel = useMemo(
    () => 'reel-l' in propClassNames,
    [propClassNames],
  )
  const isImposter = useMemo(
    () => 'imposter-l' in propClassNames,
    [propClassNames],
  )
  const isIcon = useMemo(
    () => 'icon-l' in propClassNames,
    [propClassNames],
  )

  const containerClassNames = useMemo(
    () =>
      clsx(
        'bg-gray-700',
        {
          'w-full h-full': !(isFrame || isReel || isIcon),
          'w-1/2': isFrame,
          'overflow-y-auto transition-all duration-300': !isReel,
          'max-w-[calc(100vw-3.5rem)]': isReel,
          'text-white p-4': isIcon,
        },
        propClassNames,
        actionClassNames,
        otherClassNames,
      ),
    [propClassNames, actionClassNames, otherClassNames],
  )

  return innerHTML ? (
    isImposter ? (
      <>
        <div
          className={containerClassNames}
          dangerouslySetInnerHTML={innerHTML}
        />
        {propClassNames['imposter-l_fixed'] && (
          <button
            onClick={() => {
              setPropClassNames({
                ...propClassNames,
                ...{ 'imposter-l_fixed': false },
              })
            }}
            className={clsx(
              'fixed p-2 bg-gray-50 text-gray-900 font-semibold z-[90]',
              propClassNames['imposter-l_m-12']
                ? 'top-12 left-12'
                : 'top-base left-base',
            )}
          >
            ← Back
          </button>
        )}
      </>
    ) : (
      <div
        className={containerClassNames}
        dangerouslySetInnerHTML={innerHTML}
      />
    )
  ) : (
    <div className={containerClassNames}>{children}</div>
  )
}

type Props = {
  propClassNames: ClassNamesState
  setPropClassNames: (classNames: ClassNamesState) => void
  actionClassNames?: ClassNamesState
  otherClassNames?: ClassNamesState
  children?: React.ReactNode
  innerHTML?: { __html: string }
}
