<template>
    <article class="panel is-primary has-background-white">
        <p class="panel-heading">
            {{ title }}
        </p>
        <div class="panel-block">
            <p class="control has-icons-left">
                <input v-model="input" class="input is-primary" type="text" placeholder="Rechercher">
                <span class="icon is-left">
                <i class="fa fa-search" aria-hidden="true"></i>
                </span>
            </p>
        </div>
        <div v-for="(v,k) in files" :key="k">
            <a class="panel-block is-active"  v-if="v.toLowerCase().search(input.toLowerCase()) != -1" @click="Open(v)">
                <span class="panel-icon" ><i class="fa fa-book" aria-hidden="true"></i></span>{{ v }}
            </a>
        </div>
        
    </article>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        title: String
    }
})
export default class Attachements extends Vue {

    mounted(){

    }

    Open(filename:string){
        console.log( filename )
        //window.open(filename)
    }
    input = ""
    files = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Vestibulum", "ultricies", "magna", "ac", "diam", "lacinia", "ultricies.", "Nunc", "quis", "tellus", "cursus", "pellentesque", "ante", "quis", "dignissim", "metus", "Aenean", "pulvinar", "odio", "vel", "nisl", "placerat"]
}

</script>