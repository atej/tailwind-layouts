import { useToggleState } from 'react-stately'
import { useToggleButton } from 'react-aria'
import { useRef } from 'react'
import type { ElementType } from 'react'
import type { AriaToggleButtonProps } from 'react-aria'

function ToggleButton(
  props: AriaToggleButtonProps<ElementType> & { className?: string },
) {
  let ref = useRef<HTMLButtonElement | null>(null)
  let state = useToggleState(props)
  let { buttonProps } = useToggleButton(props, state, ref)

  return (
    <button {...buttonProps} ref={ref} className={props.className}>
      {props.children}
    </button>
  )
}

export default ToggleButton
