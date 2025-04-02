// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Content from './Content.vue'
import './custom.scss'

export default {
  ...DefaultTheme,
  Layout: Content
}
