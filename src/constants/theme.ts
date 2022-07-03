import { DefaultTheme } from 'styled-components'

const font = {
  large: '36px',
  medium: '15px',
  small: '14px',
}

const colors = {
  gray: {
    500: 'rgb(58, 58, 58)',
    400: 'rgb(58, 58, 58, 0.8)',
    300: 'rgb(58, 58, 58, 0.7)',
  },
}

const theme: DefaultTheme = { font, colors } as const

export default theme
