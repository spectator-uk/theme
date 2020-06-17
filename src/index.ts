import { heading } from './text/heading'
import { color } from './colors/color'
import { body } from './text/body'
import { accent } from './text/accent'
import { info } from './text/info'

export type ThemeColors = typeof color
export type ThemeSizes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type ThemeTextLineHeights = 'compact' | 'normal' | 'spacious'
export type ThemeTextWeights = keyof typeof body['weight']

export type ThemeTextDefinition = {
  fontFamily: string
  fontFallback?: string

  weight: {
    light?: number
    regular?: number
    medium?: number
    bold?: number
    extraBold?: number
  }

  metrics: {
    [key in 'mobile' | 'tablet' | 'laptop']?: {
      [key in ThemeSizes]?: {
        size: string | number
        lineHeight: {
          [key in ThemeTextLineHeights]?: string | number
        }
        letterSpacing?: string | number
      }
    }
  }
}

const theme = {
  baseUnit: '8px',

  color,

  text: {
    heading,
    body,
    accent,
    info
  }
}

export default theme
