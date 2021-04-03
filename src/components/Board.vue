
<template>
    <div class="board">
        <header>
            header
        </header>
        <nav>
            nav
        </nav>
        <section>
            section
        </section>
        <aside>
            aside
        </aside>
        <footer>
            footer
        </footer>
    </div>
    
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';



@Options({
  props: {
    msg: String
  }
})
export default class Board extends Vue {
  msg!: string
}
</script>

<style scoped>

.board {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav section aside"
    "footer footer footer";
  grid-template-rows: 8% 1fr 8%;
  grid-template-columns: 15% 1fr 15%;
  grid-gap: 0px;
  height: 100vh;
  width: 100vw;
  margin: 0px;
}

header {
  border: 1px solid black;
  grid-area: header;
  
}

nav {
  border: 1px solid black;
  grid-area: nav;
}

section {
  border: 1px solid black;
  grid-area: section;
}

aside {
  border: 1px solid black;
  grid-area: aside;
}

footer {
  border: 1px solid black;
  grid-area: footer;
}

header,
nav,
section,
aside,
footer {
  padding: 5px;
}

</style>