<template>
    <section class="activities" id="actividades">
        <div class="activities__image">
            <div class="activities__image--blob1">
                <img src="/assets/images/blobpurple.png" />
            </div>

            <div class="activities__image--blob1">
                <img src="/assets/images/bloblightpurple.png" />
            </div>

            <div class="activities__image--circle1">
                <img src="/assets/images/circlelightpurple.png" />
            </div>
        </div>

        <div class="activities__text">
            <h2 class="activities__text--title">
                {{ locale.activities.title[0] }}
            </h2>
            <h2 class="activities__text--title-impact">{{ locale.activities.title[1] }}</h2>
            <p class="activities__text--subtitle">
                {{ locale.activities.subtitle }}
            </p>
            <p class="activities__text--description">
                {{ locale.activities.description[0] }}
                <a href="https://twitter.com/CatedraCicas" target="_blank">{{ locale.activities.description[1] }}</a>
                {{ locale.activities.description[2] }}
                <a href="https://github.com/catedra-corunet" target="_blank">{{ locale.activities.description[3] }}</a>
                {{ locale.activities.description[4] }}
            </p>
        </div>
        <ul class="activities__list">
            <li class="activities__list--item">
                <span class="activities__list--item-text">
                    <el-icon><star-filled /></el-icon>
                    {{ locale.activities.kind[0] }}
                </span>
            </li>
            <li class="activities__list--item">
                <span class="activities__list--item-text">
                    <el-icon><share /></el-icon>
                    {{ locale.activities.kind[1] }}
                </span>
            </li>
            <li class="activities__list--item">
                <span class="activities__list--item-text">
                    <el-icon><opportunity /></el-icon>
                    {{ locale.activities.kind[2] }}
                </span>
            </li>
            <li class="activities__list--item">
                <span class="activities__list--item-text">
                    <el-icon><collection-tag /></el-icon>
                    {{ locale.activities.kind[3] }}
                </span>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { ElIcon } from 'element-plus'
import { CollectionTag, StarFilled, Share, Opportunity } from '@element-plus/icons-vue'
import { inject, ref, Ref } from 'vue'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'Activities',
    components: { ElIcon, CollectionTag, StarFilled, Share, Opportunity },
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
.activities {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    background: #ffffff;
    position: relative;
    /* background-image: url('../../public/assets/images/pic2test.jpeg'); */
    height: 100vh;

    &__image {
        &--circle1 img {
            /*verde*/
            z-index: 0;
            height: 150px;
            position: absolute;
            top: 130px;
            right: 550px;
            margin: auto;
        }

        &--blob1 img {
            z-index: 0;
            height: 550px;
            position: absolute;
            top: 180px;
            right: 120px;
            margin: auto;
        }
    }

    &__text {
        position: absolute;
        left: 180px;
        top: 220px;
        width: 40%;

        &--title {
            font-size: 48px;
            line-height: 65px;
            width: 100%;
            color: #222;
        }

        &--title-impact {
            font-size: 50px;
            font-weight: 800;
            margin-top: -30px;
            color: rgba(236, 99, 40, 1);
            transition: 0.4s ease;

            &:hover {
                transform: scale(1.1);
                margin-left: 30px;
            }
        }

        &--subtitle {
            color: #222;
            font-size: 20px;
            line-height: 34px;
            width: 90%;
            text-align: justify;
        }

        &--description {
            color: #222;
            font-size: 20px;
            line-height: 34px;
            width: 90%;
            text-align: justify;
            transition: 0.4s ease;

            & > a {
                color: rgba(236, 99, 40, 1);
                text-decoration: none;
            }
        }
    }

    &__list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        column-gap: 3rem;
        list-style: none;
        position: absolute;
        top: 350px;
        right: 120px;

        &--item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: rgb(236, 99, 40);
            padding: 1.4rem 1.2rem;
            border-radius: 12px;
            width: 90%;
            box-shadow: 0px 0px 4px rgb(230, 230, 230);
            cursor: pointer;
            transition: 0.4s ease;

            &:hover {
                transform: scale(1.1) translateY(-7px);
                box-shadow: 0px 0px 14px rgb(230, 230, 230);
            }
        }

        &--item-text {
            font-size: 18px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
            color: white;
        }

        &--item-number {
            text-align: right;
        }
    }
}

@media only screen and (max-width: 600px) {
    .activities {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
        background: #ffffff;
        position: relative;
        background-image: url('../../public/assets/images/pic2test.jpeg');
        height: 100vh;

        &__image {
            &--circle1 img {
                /*verde*/
                z-index: 0;
                height: 150px;
                position: absolute;
                top: 130px;
                right: 550px;
                margin: auto;
            }

            &--blob1 img {
                z-index: 0;
                height: 380px;
                position: absolute;
                bottom: -100px;
                right: 0px;
                margin: auto;
            }
        }

        &__text {
            position: absolute;
            left: 0px;
            top: 0px;
            padding: 20px;
            width: 90%;

            &--title {
                font-size: 30px;
                width: 100%;
                line-height: 50px;
                margin: 32px 0px;
            }

            &--title-impact {
                font-size: 32px;
                font-weight: 800;
                margin-top: -30px;
                color: rgba(236, 99, 40, 1);

                &:hover {
                    color: rgba(236, 99, 40, 0.8);
                }
            }

            &--subtitle {
                color: #222;
                font-size: 14px;
                line-height: 26px;
                width: 90%;
                text-align: justify;
                margin-top: 20px;
            }

            &--description {
                color: #222;
                font-size: 14px;
                line-height: 26px;
                width: 90%;
                text-align: justify;
                margin-top: 0px;
            }
        }

        &__list {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            column-gap: 2rem;
            width: 60%;
            height: 50px;
            left: 40px;
            margin-top: 80px;

            &--item {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                background-color: rgb(37, 25, 19);
                padding: 1rem;
                border-radius: 12px;
                width: 90%;
                box-shadow: 0px 0px 4px rgb(230, 230, 230);

                &:hover {
                    background-color: rgb(221, 113, 66);
                }
            }

            &--item-text {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
                color: white;
                font-size: 14px;
            }

            &--item-number {
                text-align: right;
            }
        }
    }
}
</style>
