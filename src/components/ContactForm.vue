<script>
import emailjs from '@emailjs/browser';
export default {
    name: 'ContactForm',
    data() {
        return {
            name: '',
            nameV: 'ok',
            email: '',
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // email regex
            mailV: 'ok',
            message: '',
            messageV: 'ok',

        }
    },
    methods: {
        sendEmail() {
            emailjs.init({
                publicKey: '9uWREM71rpn0xiZ1p',
                blockList: {
                    watchVariable: 'davidedigiacomo001@gmail.com',
                },
            });
            let params = {
                from_name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
            }
            emailjs.send('service_neugxcg', 'template_uk9wriq', params).then(function (res) {
                console.log('success' + res.status);
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            })
        },
        inputValidator() {
            this.name < 3 ? this.nameV = false : this.nameV = true;
            this.message < 3 ? this.messageV = false : this.messageV = true;
            this.email.match(this.pattern) ? this.mailV = true : this.mailV = false;

            if (this.name.length > 3 && this.message.length > 3 && this.email.match(this.pattern)) {
                this.sendEmail(), alert('Email sent');
            }
        },
    }
}
</script>
<template>
    <div class="gradino" v-if="this.$route.name == 'contact'"></div>
    <div class="container my-5">
        <h1 class="young-serif text-white text-end my-4">CONTAT<span class="text-warning young-serif">TAMI</span></h1>
        <form @submit.prevent="inputValidator()" novalidate autocomplete="off">
            <div class="form-group d-flex flex-wrap justify-content-center">
                <div class="col-12 col-md-6 p-2">
                    <label for="name" class="form-lable" :class="nameV == false ? 'text-danger' : 'text-white'">Nome:</label>
                    <input type="text" name="name " id="name" class="bg-transparent text-white form-control mb-1 border-warning"
                        min="3" v-model="name" :class="nameV == false ? 'is-invalid' : nameV == true ? 'is-valid' : ''"
                        @input="name.length >= 3 ? nameV = true : nameV = false">
                    <div id="nameHelp" class="form-text mb-2 text-white"
                        :class="nameV == false || nameV == true ? 'd-none' : ''">Inserisci il tuo nome.</div>
                    <div class="text-danger mb-2" :class="nameV == false ? 'invalid-feedback' : 'd-none'">
                        Il nome deve essere composto da almeno 3 caratteri.
                    </div>
                    <div class="text-success mb-2" :class="nameV == true ? 'valid-feedback' : 'd-none'">
                        Ci siamo!! 👍
                    </div>
                </div>
                <div class="col-12 col-md-6 p-2">
                    <label for="email" :class="mailV == false ? 'text-danger' : 'text-white'">Email:</label>
                    <input type="email" name="email" id="email" class="form-control mb-1 bg-transparent text-white border-warning"
                        v-model="email" :class="mailV == false ? 'is-invalid' : mailV == true ? 'is-valid' : ''"
                        @input="email.match(pattern) ? mailV = true : mailV = false">
                    <div id="emailHelp" class="form-text mb-2 text-white"
                        :class="mailV == false || mailV == true ? 'd-none' : ''">Inserisci correttamente la tua mail.
                    </div>
                    <div class="text-danger mb-2" :class="mailV == false ? 'invalid-feedback' : 'd-none'">
                        La mail deve essere formata correttamente.
                    </div>
                    <div class="text-success mb-2" :class="mailV == true ? 'valid-feedback' : 'd-none'">
                        Ci siamo!! 👍
                    </div>
                </div>
                <div class="col-12 col-md-12 p-2">
                    <label for="message" :class="messageV == false ? 'text-danger' : 'text-white'">Messaggio:</label>
                    <textarea type="text" name="message " id="message" class="form-control mb-1 bg-transparent text-white border-warning"
                        v-model="message" :class="messageV == false ? 'is-invalid' : messageV == true ? 'is-valid' : ''"
                        @input="message.length >= 3 ? messageV = true : messageV = false"></textarea>
                    <div id="nameHelp" class="form-text mb-2 text-white"
                        :class="messageV == false || messageV == true ? 'd-none' : ''">Inserisci il tuo messaggio.</div>
                    <div class="text-danger mb-2" :class="messageV == false ? 'invalid-feedback' : 'd-none'">
                        Inserisci un messaggio di almeno 3 caratteri.
                    </div>
                    <div class="text-success mb-2" :class="messageV == true ? 'valid-feedback' : 'd-none'">
                        Ci siamo!! 👍
                    </div>
                </div>   
            </div>
            <button type="submit" class="btn my-auto" @click="inputValidator()"
                :class="nameV == false || mailV == false || messageV == false ? 'disabled' : 'btn-outline-warning'">Invia</button>
        </form>
    </div>
    <div class="indietro btn btn-warning">
        <RouterLink class="nav-link" to="/">
            home
        <i class="fa fa-home" aria-hidden="true"></i>
        </RouterLink>
    </div>
</template>
<style scoped>
span {
    border-bottom: 3px solid #ffc107;
}
</style>