import DefaultTheme from 'vitepress/theme'
import ModuloCard from './components/ModuloCard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ModuloCard', ModuloCard)
  },
}
