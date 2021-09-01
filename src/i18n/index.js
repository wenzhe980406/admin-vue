import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages = {
  en: require('./langs/en').default,
  zh: require('./langs/zh').default
}
export default new VueI18n({
  locale: 'en',
  messages,
  fallback: 'en',
  silentFallbackWarn: true
})
