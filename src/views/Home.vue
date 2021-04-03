<template>
  <registerForm/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Board from '@/components/Board.vue'; // @ is an alias to /src
import registerForm from '@/components/registerForm.vue';

@Options({
  components: {
    registerForm
  },
})
export default class Home extends Vue {}
</script>
