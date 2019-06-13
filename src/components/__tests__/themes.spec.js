import { expect } from '../../../test/expect'

import useAppTheme from '@/components/themes'

import { lightThemeConfigs } from '@/components/themes/light-theme'
import { darkThemeConfigs } from '@/components/themes/dark-theme'
import { grayThemeConfigs } from '@/components/themes/gray-theme'

describe('Theme Component', () => {
  it('return light theme if no theme specified', () => {
    const result = useAppTheme()
    expect(result.palette.type).to.eq(lightThemeConfigs.palette.type)
  })

  it('return dark theme if theme value is dark', () => {
    const result = useAppTheme('dark')
    expect(result.palette.type).to.eq(darkThemeConfigs.palette.type)
  })

  it('return gray theme if theme value is gray', () => {
    const result = useAppTheme('gray')
    expect(result.palette.type).to.eq(grayThemeConfigs.palette.type)
  })
})
