<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'HeaderApp',

    data() {
        return {
        }
    },

    mounted() {
        // gsap.fromTo('.navbar', {
        //     fill:  'none',
        // }, {
        //     scrollTrigger: '.navbar',
        //     fill: 'black',
        // })
    }
}
</script>

<template>
    <nav id="nav" class="p-3 nav-style-one">
        <div class="container">
            <div class="row">
                <RouterLink to="/" class="logo col-4">
                    <h1 class="Modak text-warning">&#60;DaveDev/&#62;</h1>
                </RouterLink>
                <div class="col-8 d-flex  justify-content-center align-items-center">

                    <ul class="d-flex nav-links gap-4 fs-5 text-light">
                        <li class="li-items">
                            <RouterLink to="/" class="nav-link" :class="this.$route.name == 'home' ? 'text-warning' : ''" >Home</RouterLink>
                        </li>
                        <li class="li-items">
                            <RouterLink to="/DaveDev/about" class="nav-link" :class="this.$route.name == 'about' ? 'text-warning' : ''" >About</RouterLink>
                        </li>
                        <li class="li-items">
                            <RouterLink to="/projects" class="nav-link" :class="(this.$route.name == 'projects' || this.$route.name == 'Project') ? 'text-warning' : ''" >Projects</RouterLink>
                        </li>
                        <li class="li-items">
                            <RouterLink to="/contact" class="nav-link" :class="this.$route.name == 'contact' ? 'text-warning' : ''" >Contacts</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-4"></div>

            </div>

        </div>
    </nav>
</template>

<style scoped>
/* nav{
    color: white;
    position: fixed;
    width: 100%;
    z-index: 9999;
} */
.nav-links{
    list-style: none;
}
.logo{
    text-decoration: none;
}
</style>
