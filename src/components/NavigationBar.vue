<template>
    <el-header>
        <div class="header__logo">
            <el-link :underline="false" href="/"><img class="header__logo" src="/assets/cicas-logo.svg" /></el-link>
        </div>
        <div class="header__links">
            <el-link :underline="false" href="/#objetivos">Objetivos</el-link>
            <el-link :underline="false" href="/#actividades">Actividades</el-link>
            <el-link :underline="false" href="/#info">Más info</el-link>
            <el-link :underline="false" href="https://github.com/catedra-corunet" target="_blank">
                <img class="header__icon" src="/assets/icons/github-icon.svg" />
            </el-link>
            <el-link :underline="false" href="https://discord.gg/ZCs9qenvMf" target="_blank">
                <img class="header__icon" src="/assets/icons/discord-icon.svg" />
            </el-link>
            <el-select v-model="selectedLanguage" class="m-2" placeholder="Idioma">
                <el-option
                    v-for="item in languageOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </div>
    </el-header>
</template>

<script lang="ts">
import { ref, Ref } from 'vue'
import { ElHeader, ElLink, ElSelect, ElOption } from 'element-plus'

export default {
    name: 'NavigationBar',
    components: { ElHeader, ElLink, ElSelect, ElOption },
    setup(): { selectedLanguage: Ref<string>; languageOptions: { value: string; label: string }[] } {
        const selectedLanguage = ref('Galego')
        const languageOptions = [
            {
                value: 'GL',
                label: 'Galego',
            },
            {
                value: 'ES',
                label: 'Español',
            },
            {
                value: 'EN',
                label: 'English',
            },
        ]

        return {
            selectedLanguage,
            languageOptions,
        }
    },
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';
.el-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4rem;
    position: sticky;
    top: 0;
    background: $background;
    z-index: 1;
    font-size: 14px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: 1px solid var(--el-border-color-base);
}

.el-select-dropdown {
    &__item {
        font-size: 14px;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
}

.header {
    &__logo {
        height: 4rem;
    }
    &__links {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
    }
    &__icon {
        height: 14px;
    }
}
</style>
