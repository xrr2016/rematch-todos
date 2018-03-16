import { themeStore } from '../storage'

export const DARK = 'DARK'
export const LIGHT = 'LIGHT'
export const APP_THEME = 'APP_THEME'

export const currentTheme = {
  state: LIGHT,
  reducers: {
    changeTheme(state, theme = LIGHT) {
      themeStore.setItem(APP_THEME, theme)
      return theme
    }
  }
}
