<template>
    <section class="about-us" id="about-us">
        <h1 class="about-us__title">
            {{ locale.objectives.title[0] }}
            <span> {{ locale.objectives.title[1] }}</span>
        </h1>

        <div class="about-us__cards">
            <div class="about-us__card">
                <div class="about-us__card--image">
                    <div class="about-us__card--logo">
                        <img src="/assets/images/logoCORUNET.svg" />
                    </div>

                    <!-- <div class="about-us__card--circle">
                    <img src="/assets/images/circlelightpurple.png" />
                </div> -->
                </div>

                <div class="about-us__card--text">
                    <h3 class="about-us__card--text-title">Corunet</h3>
                    <p class="about-us__card--text-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, asperiores laborum? Ut veniam
                        consequuntur voluptate quasi, libero harum pariatur accusamus expedita iure magnam optio
                        tempora.
                    </p>

                    <a class="about-us__card--link" href="https://coru.net/" target="_blank">Ver más</a>
                    <a href=""></a>
                </div>
            </div>

            <div class="about-us__card">
                <div class="about-us__card--image">
                    <div class="about-us__card--logo">
                        <img src="/assets/images/logoCORUNET.svg" />
                    </div>

                    <!-- <div class="about-us__card--circle">
                    <img src="/assets/images/circlelightpurple.png" />
                </div> -->
                </div>

                <div class="about-us__card--text">
                    <h3 class="about-us__card--text-title">FIC</h3>
                    <p class="about-us__card--text-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, asperiores laborum? Ut veniam
                        consequuntur voluptate quasi, libero harum pariatur accusamus expedita iure magnam optio
                        tempora.
                    </p>

                    <a class="about-us__card--link" href="https://coru.net/" target="_blank">Ver más</a>
                    <a href=""></a>
                </div>
            </div>

            <div class="about-us__card">
                <div class="about-us__card--image">
                    <div class="about-us__card--logo">
                        <img src="/assets/images/logoCORUNET.svg" />
                    </div>

                    <!-- <div class="about-us__card--circle">
                    <img src="/assets/images/circlelightpurple.png" />
                </div> -->
                </div>

                <div class="about-us__card--text">
                    <h3 class="about-us__card--text-title">Universidad</h3>
                    <p class="about-us__card--text-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, asperiores laborum? Ut veniam
                        consequuntur voluptate quasi, libero harum pariatur accusamus expedita iure magnam optio
                        tempora.
                    </p>

                    <a class="about-us__card--link" href="https://coru.net/" target="_blank">Ver más</a>
                    <a href=""></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { ElIcon } from 'element-plus'
import { CollectionTag, StarFilled, Share, Opportunity } from '@element-plus/icons-vue'
import { inject, ref, Ref } from 'vue'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'About Us',
    components: {},
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
.about-us {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;

    &__title {
        font-size: 60px;
        color: purple;
        z-index: 1;
        margin-bottom: 150px;
        font-weight: 900;
    }

    &__title > span {
        color: purple;
    }

    &__cards {
        display: flex;
        gap: 60px;
        margin-top: -70px;
    }

    &__card {
        height: 550px;
        width: 350px;
        box-shadow: 0px 0px 10px rgb(124, 124, 124);
        padding: 10px;
        border-radius: 16px;
        z-index: 1;
        position: relative;

        &--logo img {
            height: 280px;
            position: absolute;
            top: -10px;
            left: 87px;
            z-index: 222;
        }
        /* 
        &--circle img {
            height: 350px;
            position: absolute;
            top: -120px;
            left: 10px;
            z-index: 2;
        } */

        &--text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 200px;
        }

        &--text-title {
            text-transform: uppercase;
            color: purple;
            font-size: 32px;
            margin: 0;
            margin-top: 30px;
        }

        &--text-description {
            font-size: 16px;
            line-height: 26px;
            margin: 0 auto;
            color: rgb(65, 65, 65);
            text-align: justify;
            padding: 0 20px;
            margin: 20px 0;
        }

        &--link {
            padding: 10px 50px;
            border: none;
            outline: none;
            margin-top: 20px;
            background: purple;
            color: white;
            font-size: 14px;
            text-transform: uppercase;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            letter-spacing: 1px;
            border-radius: 8px;
            text-decoration: none;
        }
    }
}
</style>
