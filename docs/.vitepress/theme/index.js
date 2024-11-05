// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Empty from './Empty.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout: Empty
}
