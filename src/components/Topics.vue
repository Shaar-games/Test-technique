

<template>
	<div class="flex">
		<div v-for="(v,k) in topics" :key="k" >
			<div class="card-box pointer" @click="ChangeTopic(k)">
				<img :src="v.img" :alt="k">
				<div class="info has-background-primary">
					<p class="card-name">{{ k }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

//const administration_png = require('../assets/img/administration.png')
//const ecole_png = require('../assets/img/ecole.png')
//const bibliotheque_png = require('../assets/img/bibliotheque.jpg')

export default class Topics extends Vue {

	//administration, école,bibliothèque
	ChangeTopic(name : string){
		console.log( name )
		this.$emit('ChangeTopic' , name )
	}

	topics = {
		"administration":{
			img : require('../assets/img/administration.png')
		},
		"école":{
			img : require('../assets/img/ecole.png')
		},
		"bibliothèque":{
			img : require('../assets/img/bibliotheque.jpg')
		},
		
	}

}
</script>


<style scoped>

.pointer{
	cursor: pointer;
}

@media (min-width: 1000px) {
	.flex{
		display: flex !important;
		justify-content: center !important;
	}
}
.flex{
	display: block;
}

.card-box {
  float: left;
  width: 20vw;
  padding: 12px;
  border-radius: 0px;
  overflow: hidden;
}

.info {
  float: left;
  width: 100%;
  padding: 20px 20px 15px 20px;
}

.card-name {
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0 0 4px 0;
}

.card-left {
  font-size: 12px;
  font-weight: 400;
  color: #808080;
  float: left;
  margin: 0 20px 0 0;
}
</style>