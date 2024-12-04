<script>
import axios from 'axios';
import store from '../data/store.js'
import TechCards from '../picies/TechCards.vue';

export default {
    name: 'Project',
    components: {
        TechCards
    },
    data() {
        return {
            store,
            project: '',
            // techs: [],
        }
    },
    mounted() {
        console.log(this.$router.currentRoute.value.fullPath);
        store.projects.forEach(element => {
            if (this.$router.currentRoute.value.fullPath == '/project/' + element.slug) {
                this.project = element;
            }
        });
        console.log(this.project);   
    }
}
</script>
<template>
        
        <div class="gradino"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <h1 class="text-warning young-serif">
                    {{ project.title }}
                </h1>
            </div>
            <div class="row d-flex justify-content-arownd my-5">
                <div class="col-lg-3 col-md-12">
                    <ul class="links">
                        <li class="link">
                            <h5 class="young-serif">LINK A GITHUB</h5>
                            <span class="form-text mb-2 text-warning">Guarda nel dettagio il mio codice!</span>
                            <a class="btn btn-outline-warning" target="_blank" :href="project.git_url">
                                Git Link <i class="fa-brands fa-github icons"></i>
                            </a>
                        </li>
                        <li class="link">
                            <h5 class="young-serif">DESCRIZIONE</h5>
                            <p>
                                {{ project.description }}
                            </p>
                        </li>
                        <li class="link"></li>
                    </ul>
                </div>
                <div class="col-lg-8 col-md-12">
                    <img class="w-100" :src="project.image" :alt="project.title">
                </div>
            </div>
        </div>
    </div>
    <div class="container py-3">
        <div class="row justify-content-center no-wrap gap-3">
            <h5 class="text-warning young-serif">TECNOLOGIE UTILIZZATE</h5>
            <!-- <span class="mx-2" v-for="(tech, index) in store.project.technologies" :key="index" :class="tech.name">
                                {{ tech.name }}
                                <i :class="tech.icon"></i>
                            </span> -->
                <TechCards class="col-12 col-md-3 col-lg-2" v-for="item, index in project.technologies" :key="index" :techs="store.tech[item - 1]" />
        </div>
    </div>
</template>
<style scoped>
.links {
    list-style: none;
}

.link {
    text-decoration: none;
    color: white;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>