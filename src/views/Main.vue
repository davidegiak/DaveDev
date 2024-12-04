<script>
import store from '../data/store.js'
import axios from 'axios'
import Jumbo from '../picies/Jumbo.vue'
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import ContactForm from '../components/ContactForm.vue';
import Experience from '../components/Experience.vue';

export default {
    name: 'Main',
    components: {
        Jumbo,
        About,
        Projects,
        ContactForm,
        Experience
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        window.onscroll = function(e){
            if (window.scrollY < 50) {
                document.getElementById('nav').classList.replace('nav-style-two', 'nav-style-one')
            }
            else if (window.scrollY > 50) {
                document.getElementById('nav').classList.replace('nav-style-one', 'nav-style-two');
            }
            
        }
    }
}
</script>

<template>
    <div>
        <Jumbo/>
        <About/>
        <Projects/>
        <Experience/>
        <ContactForm/>
    </div>
</template>