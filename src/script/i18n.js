import Vue from 'vue' 
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import twLocale from 'element-ui/lib/locale/lang/zh-TW'
import zh from '../models/zh'
import tw from '../models/tw'

Vue.use(VueI18n)

const messages = {
  tw: {
    ...tw,
    ...twLocale // 或者用 Object.assign({ message: 'hello' }, twLocale)
  },
  zh: {
    ...zh,
    ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages // set locale messages
})

locale.i18n((key, value) => i18n.t(key, value))

export default i18n
