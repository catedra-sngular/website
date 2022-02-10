<template>
    <section class="objectives" id="objetivos">
        <div class="background-img"></div>
        <div class="ei">
            <h1 class="objectives__title">
                {{ locale.objectives.title[0] }}
            </h1>
            <h1 class="objectives__title-highlight">
                {{ locale.objectives.title[1] }}
            </h1>
        </div>
        <div class="objectives__carousel">
            <el-carousel :interval="5000" type="card" height="300px">
                <el-carousel-item class="objectives__item__galicia">
                    <h2 class="objectives__item--title">{{ locale.objectives.local_impact.title }}</h2>
                    <p class="objectives__item--description">
                        {{ locale.objectives.local_impact.description }}
                    </p>
                </el-carousel-item>
                <el-carousel-item class="objectives__item__transfer">
                    <h2 class="objectives__item--title">{{ locale.objectives.technology_transfer.title }}</h2>
                    <p class="objectives__item--description">
                        {{ locale.objectives.technology_transfer.description }}
                    </p>
                </el-carousel-item>
                <el-carousel-item class="objectives__item__open-science">
                    <h2 class="objectives__item--title">{{ locale.objectives.open_science.title }}</h2>
                    <p class="objectives__item--description">
                        {{ locale.objectives.open_science.description }}
                    </p>
                </el-carousel-item>
                <el-carousel-item class="objectives__item__software">
                    <h2 class="objectives__item--title">
                        {{ locale.objectives.software.title[0] }}
                        <img class="objectives__icon" src="/assets/icons/heart-icon.svg" />
                        {{ locale.objectives.software.title[1] }}
                    </h2>
                    <p class="objectives__item--description">
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

.ei {
    display: flex;
}

.el-carousel__item--card {
    border-radius: 18px;
}

.objectives {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    color: var(--el-text-color-primary);
    padding: 0% 10%;
    background-image: url('../../public/assets/images/torre.png');
    background-position: center;
    background-size: cover;

    &__title {
        font-size: 60px;
        color: $green;
        z-index: 1;
        margin-bottom: 150px;
        font-weight: 900;
        transition: 0.4s ease;
    }

    &__title-highlight {
        font-size: 60px;
        color: $green;
        z-index: 1;
        margin-bottom: 150px;
        text-shadow: 1px 1px 2px rgb(82, 82, 82);
        margin-left: 20px;
        font-weight: 900;
        transition: 0.4s ease;
        &:hover {
            transform: scale(1.1);
            margin-left: 36px;
        }
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
        width: 80%;
    }

    &__carousel-item {
        text-align: center;
        border-radius: 20px;
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

@media only screen and (max-width: 1125px) {
    .objectives {
        padding: 20px 10px;
        height: auto;
        
        .ei {
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-size: 32px;
            text-align: center;
            margin: 0;
            font-weight: 800;
        }

        &__title-highlight {
            font-size: 32px;
            margin:0;
            &:hover {
                transform: none;
                margin: 0;
            }
        }

        &__title > span {
            color: $darkpurple;
        }

        &__item {
            text-align: center;

            &__galicia {
                background-color: $darkpurple;
                font-size: 12px;
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
            padding-top: 40px;
            width: 110%;
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
            font-size: 24px;
            opacity: 0.9;
            line-height: 36px;
            height: auto;
            margin: 10px 0;
            padding: 10px;
            text-align: center;
        }
        & > p {
            color: #ffffff;
            font-size: 16px;
            opacity: 0.9;
            line-height: 26px;
            height: auto;
            margin: 0px;
            padding: 20px;
            text-align: left;
        }
    }
}

@media only screen and (max-width: 640px) {
    .objectives {
        padding: 20px 10px;
        height: auto;
        
        .ei {
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-size: 32px;
            text-align: center;
            margin: 0;
            font-weight: 800;
        }

        &__title-highlight {
            font-size: 32px;
            margin:0;
            &:hover {
                transform: none;
                margin: 0;
            }
        }

        &__title > span {
            color: $darkpurple;
        }

        &__item {
            text-align: center;

            &__galicia {
                background-color: $darkpurple;
                font-size: 12px;
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
            padding-top: 40px;
            width: 110%;
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
            font-size: 18px;
            opacity: 0.9;
            line-height: 36px;
            height: auto;
            margin: 10px 0;
            padding: 10px;
            text-align: center;
        }
        & > p {
            color: #ffffff;
            font-size: 14px;
            opacity: 0.9;
            line-height: 26px;
            height: auto;
            margin: 0px;
            padding: 10px;
            text-align: left;
        }
    }
}
</style>
