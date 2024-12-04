<script>
import store from '../data/store.js'
import ProjCards from '../picies/ProjCards.vue';
import axios from 'axios';
import ContactForm from './ContactForm.vue';

export default {
    name: 'Projects',
    components: { ProjCards, ContactForm },
    data() {
        return {
            store,
            tech: [],
        }
    },
    methods: {
        getTech() {
            this.store.projects.forEach(pro => {
                pro.technologies.forEach(x => {
                    console.log('tecnologie id', x);
                    
                    this.store.tech.forEach(element => {
                       if (x == element.id) {
                        this.tech.push(element);
                        console.log( element);
                        
                       } else {
                        ''
                       } 
                    });
                });
            });
                // return this.tech;
        }
    },
    mounted() {
        this.getTech()
        
    }
}
</script>
<template>
    <div class="back">
        <div class="container-fluid px-5">
            <h1 class="text-light text-center my-4 young-serif text-shadow">PROGE<span class="text-warning young-serif">TTI</span></h1>
            <div class="row justify-content-center my-2">
                <ProjCards class="my-2" v-for="project, index in store.projects" :key="index" :tech="tech" :proj="project" :img="project.image"/>
            </div>
            
        </div>
    </div>
    <div v-if="this.$route.name == 'projects'">
        <ContactForm/>
    </div>
</template>
<style scoped>
.back{
    background-color: #31333b;
    padding-top: 5rem;
}
</style>