<script>
import store from '../data/store.js';
import { RouterLink } from 'vue-router'

export default {
    name: 'ProjCards',
    props: {
        proj: 'string',
        tech: 'array',
        img: 'string',
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        // getImg() {
        //     return this.store.localHostUrl + '/storage/' + this.proj.img;
        // }

    },
    mounted() {

    }
}
</script>
<template>
    <div class="col-12 col-md-6 col-lg-4">
        <div class="my-card">
            <div class="info flex-column text-center d-flex justify-content-center">
                <div class="mx-auto">
                    <h2>{{ proj.title }}</h2>
                    <a target="_blank" class="nav-link text-warning fs-5" :href="proj.git_url">Git Link</a>
                    <div class="mb-3 d-none  d-sm-block">

                        <span v-for="x, index in tech" :key="index" class="mx-2 fs-3">
                            <a :class="x.name" :href="x.docs" target="_blank">
                                <i :class="x.icon" aria-hidden="true"></i>
                            </a>

                        </span>
                    </div>
                    <!-- <a class="btn btn-outline-warning" >Scopri di più</a> -->
                    <RouterLink :to="{ name: 'Project', params: {slug: proj.slug}  }"
                    class="text-decoration-none"> Scopri di più </RouterLink>
                    <!-- <button class="btn btn-primary" data-bs-target="#modal" data-bs-toggle="modal">Scopri di più</button> -->
                </div>
            </div>
            <div class="myImg">
                <img class="w-100" :src="proj.image">
            </div>
        </div>
    </div>
    <div class="modal fade" id="modal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0 bg-dark">
                    <h1 class="modal-title text-warning young-serif" id="exampleModalToggleLabel2">{{ proj.title }}
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body border-0 bg-dark">
                    <div class="row">
                        <div class="col-12 col-md-12">
                            <img :src="proj.image" class="w-100">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-12 col-md-8">
                            <p class="text-light text-center">
                                {{ proj.description }}
                            </p>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-12 col-md-6 text-center">
                            <span v-for="x, index in tech" :key="index" class="mx-2 fs-3">
                                <a :class="x.name" :href="x.docs" target="_blank">
                                    <i :class="x.icon" aria-hidden="true"></i>
                                </a>

                            </span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0 bg-dark">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i
                            class="fa fa-backward" aria-hidden="true"></i> Indietro</button>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
.my-card {
    width: 100%;
    position: relative;
    box-shadow: 5px 5px 8px 2px rgb(30, 30, 30);
    /* height: 350px; */
    padding: 0;
    /* background-image: v-bind('img'); */
    /* background-color: #3d3e42; */
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
}

.info {
    padding: 1rem;
    width: 100%;
    height: 100%;
    color: white;
    opacity: 0;
    transition: 300ms;
    vertical-align: middle;
    position: absolute
}

.info:hover {
    opacity: 1;
    background-color: #3d3e42b9;
}

.txt {
    height: 1.5rem;
    width: 350px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* background-color: red; */
}

.myImg {
    width: 100%;
}

/* .modal-header, .modal-footer {
    border: 0 !important;
} */
</style>
