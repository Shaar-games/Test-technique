<template>
	<div class="parent">
		
		<div class="flex-center-vertically">
			<div class="columns is-centered is-vcentered">
			  <div class="column is-half">
			    <confirmation/>
			  </div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import confirmation from '@/components/confirmation.vue';

@Options({
  components: {
    confirmation
  },
})

export default class Login extends Vue {

}
</script>


<style scoped>
.flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
}
</style>