
<template>
    <div class="board">
        <header class="has-background-white">
			<nav class="breadcrumb is-medium bread ml-2 has-background-white" aria-label="breadcrumbs" >
				<ul v-if="currentRoute.length > 1">
					<li v-for="i in currentRoute.length-1" :key="i"><router-link :to="linkFrom(i)" >{{ currentRoute[i] }}</router-link></li>
				</ul>
			</nav>
        </header>
        <dl>

			<div :class="{ 'has-background-primary': currentRoute[1] == 'messagerie' , 'has-background-white': currentRoute[1] != 'messagerie' , 'p-3 mb-1 pointer' : true }" @click="Push('/messagerie')">
				<div :class="{'title has-text-centered is-5' : true , 'has-text-white' : currentRoute[1] == 'messagerie' , 'has-text-black' : currentRoute[1] != 'messagerie'}">Messagerie</div>
			</div>

			<div :class="{ 'has-background-primary': currentRoute[1] == 'documentation' , 'has-background-white': currentRoute[1] != 'documentation' , 'p-3 mb-1 pointer' : true }"  @click="Push('/documentation')">
				<div :class="{'title has-text-centered is-5' : true , 'has-text-white' : currentRoute[1] == 'documentation'}">Documentation</div>
			</div>

        </dl>
        <section>
			<div v-if="currentRoute[1] == 'messagerie' && !currentRoute[2]">
				<GroupChat @ChangeTopic="ChangeTopicM"></GroupChat>
			</div>

			<div v-if="currentRoute[1] == 'messagerie' && currentRoute[2]">
				<Chat></Chat>
			</div>

			<div v-if="currentRoute[1] == 'documentation' && !currentRoute[2]">
				<Topics @ChangeTopic="ChangeTopicD"></Topics>
			</div>

			<div v-if="currentRoute[1] == 'documentation' && currentRoute[2]">
				<Attachements :title="currentRoute[2]" ></Attachements>
			</div>
			
        </section>
        <aside>
            
        </aside>
        <footer>
            <Footer/>
        </footer>
    </div>
    
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Topics from '@/components/Topics.vue';
import Chat from '@/components/Chat.vue';
import GroupChat from '@/components/GroupChat.vue';
import Footer from '@/components/Footer.vue';
import Attachements from '@/components/Attachments.vue';
import router from '../router/index';
@Options({
  components: {
    Topics,Chat,Footer,GroupChat,Attachements
  },
  watch: {
	'$route'(to, from) {
		this.updatedPath()
  	}
  },
})
export default class Board extends Vue {

	ChangeTopicM( name : string ){
		router.push( "/messagerie/" + name )
	}

	ChangeTopicD( name : string ){
		router.push( "/documentation/" + name )
	}

	Push( path:string){
		router.push( path )
	}

	mounted(){
		this.updatedPath()
	}

	linkFrom(from:number){
		let ret = ""
		for (let index = 1; index < from+1; index++) {
			const element = this.currentRoute[index];
			ret = ret + "/" + element
		}
		return ret;
	}

	updatedPath(){

		this.currentRoute = this.$route.path.split("/")

		for (let index = 0; index < this.currentRoute.length; index++) {
			this.currentRoute[index] = decodeURI( this.currentRoute[index] );
		}

		console.log( this.currentRoute )
	}

	currentRoute : string[] = []

}
</script>

<style scoped>
.gridvcenter {
	align-self:center;
	align-items:center;
}

.bread{
	margin-top: 1%;
	overflow: hidden;
}

.pointer{
	cursor: pointer;
}

.board {
  display: grid;
  grid-template-areas:
    "header header header"
    "dl section aside"
    "footer footer footer";
  grid-template-rows: 8% 1fr 8%;
  grid-template-columns: 15% 1fr 15%;
  grid-gap: 0px;
  height: 100vh;
  width: 100vw;
  margin: 0px;
}

header,dl,section,aside,footer{
	padding: 0.2rem;
}

header {
  
  grid-area: header;
  
}

dl {
  
  grid-area: dl;
}

section {
  
  margin: 0px;
  grid-area: section;
  overflow-y: scroll;
  overflow-x: hidden; 
}

aside {
  
  grid-area: aside;
}

footer {
  
  grid-area: footer;
}


</style>