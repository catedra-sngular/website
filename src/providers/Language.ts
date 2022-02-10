/*
Copyright (C) 2022 Catedra Corunet polo Impulso da Ciencia Aberta
                   a través do Software

This program is free software: you can redistribute it and/or modify it 
under the terms of the GNU General Public License as published by the Free 
Software Foundation, either version 3 of the License, or (at your option) 
any later version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS 
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with 
this program. If not, see <https://www.gnu.org/licenses/>. 
*/

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
