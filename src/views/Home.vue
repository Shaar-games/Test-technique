<template>
  <Board/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Board from '@/components/Board.vue'; // @ is an alias to /src
import registerForm from '@/components/registerForm.vue';
import router from '../router/index';
@Options({
  components: {
    Board
  },
})
export default class Home extends Vue {
  beforeCreate(){
	    router.push("/signup")
	}
}
</script>
