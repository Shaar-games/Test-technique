<template>
	<div class="parent">
		<div class="flex-center-vertically">
			<div class="columns is-centered is-vcentered">
			  <div class="column is-half">
			    <registerForm/>
			  </div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import registerForm from '@/components/registerForm.vue';

@Options({
  components: {
    registerForm
  },
})
export default class Home extends Vue {}
</script>


<style>
.flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
</style>