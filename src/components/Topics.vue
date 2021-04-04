

<template>
	<div>
		<div v-for="(v,k) in topics" :key="k">
			<div class="card-box" @click="ChangeTopic(k)">
				<img :src="v.img" :alt="k">
				<div class="info">
					<p class="card-name">{{ k }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


const sportimg = require('../assets/img/sport.png')
const geographieimg = require('../assets/img/geographie.png')
const artimg = require('../assets/img/art.png')
export default class Topics extends Vue {

	//topics = ["sport", "géographie", "art","sport", "géographie", "art","sport", "géographie", "art"]
	ChangeTopic(name : string){
		console.log( name )
		this.$emit('ChangeTopic' , name )
	}

	topics = {
		"sport":{
			img : sportimg
		},
		"géographie":{
			img : geographieimg
		},
		"art":{
			img : artimg
		},
	}
}
</script>


<style scoped>

.card-box {
  float: left;
  width: 280px;
  padding: 12px;
  border-radius: 0px;
  overflow: hidden;
}

.info {
  background: #3c3b3d;
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