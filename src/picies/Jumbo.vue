<script>
import axios from 'axios';
import store from '../data/store.js';

export default {
    name: 'Jumbo',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="gradino"></div>
    <div class="jumbo d-flex justify-content-between align-items-center ">
        <div class="col-3 col-md-4 mx-auto text-center text-shadow">
            <h2 class="jumboDesc mx-auto text-light">Sono <span class="DynaPuff text-warning">Davide Di Giacomo</span> e sono un
                <span class="DynaPuff text-warning">Programmatore.</span>
            </h2>
        </div>
        <div class="col-6 col-sm-6 col-md-5 col-lg-4">
            <img class="jumboImg" src="/src/assets/img/foto_curriculum-no-back.png" style="">

        </div>
    </div>
</template>

<style scoped>
.jumboImg {
    width: 100%;
    filter: grayscale(100%)
}
.jumbo {
    /* z-index: 99999; */
    /* border-bottom: 5px solid rgba(0, 0, 0, 0.347); */
    /* box-shadow: 0px 5px 7px 0px white; */
    background-color: #34353a;
    /* height: 90vh; */
}
.jumboDesc{
    font-size: 2.5rem;
}
@media screen  and (max-width: 768px) {
    .jumboDesc{
        font-size: 1.3rem;
    }
}
/* @media screen  and (max-width: 400px) {
    .jumbo{
    }
} */
</style>