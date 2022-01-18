<template>
    <el-footer class="footer" height="min-content">
        <el-col class="footer__content">
            <el-row class="footer__links" :gutter="10" justify="start" align="middle">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <el-row class="footer__title">
                        <span>Actividades</span>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/#formacion">De formación</el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/#investigacion">De investigación</el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/#divulgacion">De divulgación</el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/#transferencia">De transferencia</el-link>
                    </el-row>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <el-row>
                        <span class="footer__title">Social</span>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="https://discord.gg/ZCs9qenvMf">Comunidad en Discord</el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="https://github.com/catedra-corunet"
                            >Repositorio en Github</el-link
                        >
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="https://twitter.com/corunet">Cuenta de Twitter</el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="https://www.instagram.com/hola.corunet/"
                            >Postureo en Instagram</el-link
                        >
                    </el-row>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <el-row>
                        <span class="footer__title">Comunidad</span>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/#atribuciones">Atribuciones</el-link>
                    </el-row>
                </el-col>
            </el-row>
            <el-row justify="center" :gutter="10">
                <img class="footer__logo" src="/assets/cicas-logo.svg" />
            </el-row>
            <el-row justify="center" :gutter="10">
                <div class="footer__subtitle">Creado desde Corunet con cariño para toda la comunidad</div>
            </el-row>
        </el-col>
    </el-footer>
</template>

<script lang="ts">
import { ElFooter, ElRow, ElCol, ElLink } from 'element-plus'

export default {
    name: 'Footer',
    components: { ElFooter, ElRow, ElCol, ElLink },
}
</script>

<style scoped>
.footer {
    display: flex;
    font-size: 14px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-top: 1px solid var(--el-border-color-base);
    padding: 2rem;
}

.el-col {
    height: auto !important;
}

.footer__title {
    font-size: 18px;
    font-weight: bold;
    color: var(--el-text-color-primary);
}

.footer__links {
    display: flex;
    align-items: flex-start;
    gap: 15%;
    margin-bottom: 1rem;
}

.footer__logo {
    height: 4rem;
}

.el-col {
    display: flex;
    flex-direction: column;
    height: 10rem;
    gap: 1rem;
}

.footer__subtitle {
    text-align: center;
    font-size: 16px;
    color: var(--el-text-color-primary);
}
</style>
