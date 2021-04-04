<template>
	<div>
		<div v-for="(v,k) in groups" :key="k">
			<div class="pointer" @click="ChangeTopic(k)">
                <div class="card-content mb-1 has-background-white">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-128x128">
                          <img :src="v.img" alt="Placeholder image">
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-3 mt-40px is-vcentered">{{k}}</p>
                      </div>
                    </div>

                    <div class="content">
                      86 messages
                      <br>
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
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

export default class GroupChat extends Vue {

	//groups = ["sport", "géographie", "art","sport", "géographie", "art","sport", "géographie", "art"]

    groups = {
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

	ChangeTopic(name : string){
		console.log( name )
		this.$emit('ChangeTopic' , name )
	}
}
</script>


<style scoped>

.mt-40px{
    margin-top : 40px;
}
.pointer{
	cursor: pointer;
}
</style>