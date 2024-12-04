<script>
import store from '../data/store.js';

export default {
    name: 'TechCards',
    props: {
        techs: 'string'
    },

    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <!-- <div class="my-card text-center col-12 col-md-2"> -->
        <a class="x my-card text-center" :href="techs.docs" target="_blank" >
            <span class="text-shadow" :class="techs.name">
                <i :class="techs.icon" class="icons" aria-hidden="true"></i>
            </span>
            <h5 class="text-white mt-4 text-shadow">{{ techs.name }}</h5>
        </a>
    <!-- </div> -->

</template>
<style scoped>
.my-card {
    padding: 2rem;
    background-color: #3d3e42;
    border-radius: 15px;
    box-shadow: 5px 5px 8px 2px rgb(30, 30, 30);
    text-decoration: none;
}

.icons {
    font-size: 4rem;
}
</style>
