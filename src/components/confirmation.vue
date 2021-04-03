
<template>
    <div class="notification is-white has-text-centered p-6">
      <strong class="title is-4">Vous devez activer votre compte avant d'aller plus loin</strong>
      <br>
      <button class="button is-primary center mt-4" @click="SendMail()">M'envoyer un mail de confirmation</button>
    </div>
</template>

<script lang="ts">

import axios from 'axios'
import { Options, Vue } from 'vue-class-component';
export default class confirmation extends Vue {
    SendMail(){
        console.log( "do stuff" )
    }
}

</script>


<style scoped>

</style>

