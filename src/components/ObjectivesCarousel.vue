<template>
    <section class="objectives" id="objetivos">
        <h1 class="objectives__title">
            {{ locale.objectives.title }}
            <span> {{ locale.objectives.title_highlight }}</span>
        </h1>
        <div class="objectives__carousel">
            <el-carousel :interval="5000" type="card" height="300px">
                <el-carousel-item class="objectives__item__galicia">
                    <h2>{{ locale.objectives.local_impact.title }}</h2>
                    <p>
                        {{ locale.objectives.local_impact.description }}
                    </p>
                </el-carousel-item>
                <el-carousel-item class="objectives__item__transfer">
                    <h2>{{ locale.objectives.technology_transfer.title }}</h2>
                    <p>
                        {{ locale.objectives.technology_transfer.description }}
                    </p>
                </el-carousel-item>
                <el-carousel-item class="objectives__item__open-science">
                    <h2>{{ locale.objectives.open_science.title }}</h2>
                    <p>
                        {{ locale.objectives.open_science.description }}
                    </p>
                </el-carousel-item>
                <el-carousel-item class="objectives__item__software">
                    <h2>
                        {{ locale.objectives.software.title_1 }}
                        <img class="objectives__icon" src="/assets/icons/heart-icon.svg" />
                        {{ locale.objectives.software.title_2 }}
                    </h2>
                    <p>
                        {{ locale.objectives.software.description }}
                    </p>
                </el-carousel-item>
            </el-carousel>
        </div>
    </section>
</template>

<script lang="ts">
import { inject, ref, Ref } from 'vue'
import { ElCarousel } from 'element-plus'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'Objectives',
    components: { ElCarousel },
    setup(): {
        selectedLanguage: Ref<string>
        languageOptions: { value: string; label: string }[]
        locale: unknown
        setLanguage: unknown
    } {
        const locale = inject(ProvideLocaleKey)
        const setLanguage = inject(ProvideSetLanguageKey)

        function getLanguage() {
            switch (localStorage.getItem('languageId')) {
                case 'GL':
                    return 'Galego'
                case 'ES':
                    return 'Español'
                case 'EN':
                    return 'English'
                default:
                    return 'Galego'
            }
        }

        const selectedLanguage = ref(getLanguage())
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
            locale,
            setLanguage,
        }
    },
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';
.objectives {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    color: var(--el-text-color-primary);
    padding: 0% 10%;

    &__title {
        font-size: 60px;
        color: $lightpurple;
    }

    &__title > span {
        color: $darkpurple;
        text-decoration: underline $darkpurple;
    }

    &__item {
        text-align: center;
        &__galicia {
            background-color: $darkpurple;
        }
        &__transfer {
            background-color: $lightpurple;
        }
        &__open-science {
            background-color: $green;
        }
        &__software {
            background-color: $orange;
        }
    }

    &__carousel {
        width: 100%;
    }

    &__carousel-item {
        text-align: center;
    }

    &__icon {
        height: 18px;
    }
}

.el-carousel__item {
    & > h2 {
        color: #ffffff;
        font-size: 30px;
        opacity: 0.9;
        line-height: 50px;
        height: 100px;
        margin: 30px;
        text-align: center;
    }
    & > p {
        color: #ffffff;
        font-size: 18px;
        opacity: 0.9;
        line-height: 30px;
        height: 100px;
        margin: 30px;
        text-align: center;
    }
}
</style>
