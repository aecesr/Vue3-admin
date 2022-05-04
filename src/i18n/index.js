import { createI18n } from 'vue-i18n'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'
import store from '@/store'

// 创建 message 数据源
const messages = {
  en: {
    msg: {
      test: 'hello world',
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      test: '你好世界',
      ...mZhLocale
    }
  }
}

// 创建 locale 语言变量
const locale = 'zh'

// 初始化 i18n 实例
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

/**
 * 返回当前 lang
 */
function getLanguage() {
  return store && store.getters && store.getters.language
}

// 导出 i18n 实例
export default i18n
