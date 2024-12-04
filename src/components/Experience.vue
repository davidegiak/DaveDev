<script>
import axios from 'axios';
import store from '../data/store.js';

export default {
    name: 'Experience',

    data() {
        return {
            store,
            // project: ''
        }
    },
    mounted() {
        // axios.get(`http://127.0.0.1:8000/api/projects/name/${this.$route.params.slug}`).then(response => {
        //     if (response.data.status) {
        //             //this.store.singleSuite = response.data.results;
        //             console.log('questo è ', this.store.singleSuite);
        //             this.project = response.data.results.id;
        //             // this.suite = response.data.results;
        //              console.log(this.suite, 'queta è lapp');

        //         } else {
        //             this.$router.push({ name: 'not-found' });
        //         }
        // })
    }
}

</script>
<template>
    <div class="mydiv mt-3">
        <h1 class="back text-center young-serif mb-4">
            EXPERIENCE
        </h1>
        <div class="container py-4">
            <div class="row ms-2">
                <div class="col-2 d-flex flex-column justify-content-center align-items-end gap-2">
                    <div class="d-flex gap-2">
                        <span class="badge text-bg-secondary">2024</span>
                        <div class="rounded-circle bg-warning" style="width: 1rem; height: 1rem;"></div>
                    </div>
                    <div class="riga bg-white me-2"></div>
                </div>
                <div class="col-8">
                    <h3 class="text-warning young-serif">Jr Full-Stack web dev <span class="text-white young-serif">|
                            BOOLEAN</span></h3>
                    <p class="text-white">
                        Ho sviluppato una falsa app di messaggistica con illayout di Whatsapp web in JavaScript
                        implementandol’invio e l’eliminazione dei messaggi al contattodesiderato.Ho ricreato il layout
                        di netflix in Vue.jsimplementando la possibilita di cercare e ricevereuna lista di film inerenti
                        alla ricerca, effettuandodelle chiamate axios ad un API di terze parti.Ho sviluppato il mio
                        portfolio in Laravel 10 e Vue.js,con autenticazione, possibilità di aggiungere,modificare e
                        rimuovere un progetto.
                    </p>
                </div>
            </div>
            <div class="row ms-2 mt-2">
                <div class="col-2 d-flex flex-column justify-content-center align-items-end gap-2">
                    <div class="d-flex gap-2">
                        <span class="badge text-bg-secondary">2020</span>
                        <div class="rounded-circle bg-warning" style="width: 1rem; height: 1rem;"></div>
                    </div>
                    <div class="riga bg-white me-2"></div>
                </div>
                <div class="col-8">
                    <h3 class="text-warning young-serif">Jr Full-Stack web dev <span class="text-white young-serif">|
                            BOOLEAN</span></h3>
                    <p class="text-white">
                        Ho sviluppato una falsa app di messaggistica con illayout di Whatsapp web in JavaScript
                        implementandol’invio e l’eliminazione dei messaggi al contattodesiderato.Ho ricreato il layout
                        di netflix in Vue.jsimplementando la possibilita di cercare e ricevereuna lista di film inerenti
                        alla ricerca, effettuandodelle chiamate axios ad un API di terze parti.Ho sviluppato il mio
                        portfolio in Laravel 10 e Vue.js,con autenticazione, possibilità di aggiungere,modificare e
                        rimuovere un progetto.
                    </p>
                </div>
            </div>
        </div>


    </div>
</template>
<style scoped>
.back {
    background: rgb(49, 51, 59);
    background: linear-gradient(180deg, rgba(49, 51, 59, 1) 50%, rgba(52, 53, 58, 1) 50%);
    color: white;
}

.mydiv {
    background-color: #34353a;
    /* height: 20rem; */
}

.riga {
    width: 2px;
    height: 100%;
}
</style>