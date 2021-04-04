

<template>
    <div>
        <div v-for="(v,k) in messages" :key="k">
            <article class="media box mt-1">
                <div class=" ml-2 media-content">
                    <div class="content">
                        <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br>
                            {{ v }}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </div>
    <div class="media-content mt-2">
        <div class="field">
            <p class="control">
                <textarea class="textarea" placeholder="Add a comment..."></textarea>
            </p>
        </div>
        <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <a class="button is-primary center">Envoyer</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
//import userimg from '../assets/img/sport.png'
export default class Topics extends Vue {

    messages = [
        "salut",
        "bjr"
    ]

}
</script>


<style scoped>

</style>