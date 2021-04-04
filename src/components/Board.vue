
<template>
    <div class="board">
        <header class="has-background-white">
            
			<nav class="breadcrumb is-medium mt-4 ml-2" aria-label="breadcrumbs">
				<ul>
					<li><a href="#">Documentation</a></li>
					<li class="is-active"><a href="#" aria-current="page">Sport</a></li>
				</ul>
			</nav>
        </header>
        <navigation>
            <div class="notification is-primary pointer mb-1 mt-1">
			  	<div class="title has-text-centered is-5 has-text-white">Messagerie</div>
			</div>
			<div class="notification is-primary pointer mb-1">
			  	<div class="title has-text-centered is-5 has-text-white">Documentation</div>
			</div>
        </navigation>
        <section>
			<!--<Topics @ChangeTopic="ChangeTopic"></Topics>-->
			<Chat></Chat>
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
import Footer from '@/components/Footer.vue';

@Options({
  components: {
    Topics,Chat,Footer
  },
})
export default class Board extends Vue {

	ChangeTopic( name : string ){
		console.log( "receive emit" , name )
	}

}
</script>

<style scoped>

.hero.has-background {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: contain;
  object-position: left center;
  width: 100%;
  height: 100%;
}
.hero-background.is-transparent {
  opacity: 0.3;
}

.pointer{
	cursor: pointer;
}

.board {
  display: grid;
  grid-template-areas:
    "header header header"
    "navigation section aside"
    "footer footer footer";
  grid-template-rows: 8% 1fr 8%;
  grid-template-columns: 15% 1fr 15%;
  grid-gap: 0px;
  height: 100vh;
  width: 100vw;
  margin: 0px;
}

header,navigation,section,aside,footer{
	padding: 0.2rem;
}

header {
  border: 1px solid black;
  grid-area: header;
  
}

navigation {
  border: 1px solid black;
  grid-area: navigation;
}

section {
  border: 1px solid black;
  margin: 0px;
  grid-area: section;
  overflow-y: scroll;
  overflow-x: hidden; 
}

aside {
  border: 1px solid black;
  grid-area: aside;
}

footer {
  border: 1px solid black;
  grid-area: footer;
}


</style>