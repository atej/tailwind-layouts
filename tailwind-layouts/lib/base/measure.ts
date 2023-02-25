import type { AddBaseParamsGenerator } from '../types'
import { l, t } from '../helpers'

const measure: AddBaseParamsGenerator = ({ options, theme }) => [
  {
    '*': {
      [l(options, 'maxWidth')]: `${t(theme, 'measure')}`,
    },
    [`${options.measureExceptions}`]: {
      [l(options, 'maxWidth')]: 'none',
    },
  },
]

export default measure
