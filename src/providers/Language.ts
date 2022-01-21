import { computed, defineComponent, provide, readonly, Ref, ref } from 'vue'
import localeGL from '@/locales/GL.json'
import localeES from '@/locales/ES.json'
import localeEN from '@/locales/EN.json'

export const ProvideLanguageKey = 'LANGUAGE'
export const ProvideLocaleKey = 'LOCALE'
export const ProvideSetLanguageKey = 'SET_LANGUAGE'

export default defineComponent({
    setup() {
        const languageId: Ref<string> = ref(localStorage.getItem('languageId') || 'GL')

        const locale = computed(() => {
            switch (languageId.value.toUpperCase()) {
                case 'GL':
                    return localeGL
                case 'ES':
                    return localeES
                case 'EN':
                    return localeEN
                default:
                    return localeGL
            }
        })

        provide(ProvideLocaleKey, readonly(locale))

        function setLanguage(id: string) {
            localStorage.setItem('languageId', id.toUpperCase())
            languageId.value = id.toUpperCase()
        }

        provide(ProvideSetLanguageKey, setLanguage)
    },
    render() {
        return this.$slots.default?.()
    },
})
