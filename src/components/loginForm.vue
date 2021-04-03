
<template>
	<div class="box">
		<div class="title is-4 has-text-centered">Se connecter</div>
		<div v-for="item in inputs" :key="item.name">
		<div class="field">
			<label class="label">{{ item.name }}</label>
			<div class="control has-icons-left has-icons-right">
				<input v-bind:class="{ 'is-danger': !item.check(item.value), 'input': true }" :type="item.type" :placeholder="'Entrez votre ' + item.name" v-model="item.value">
				<span class="icon is-small is-left">
				<i class="fa fa-user"></i>
				</span>
				<span class="icon is-small is-right" v-if="item.check(item.value)">
					<i class="fa fa-check"></i>
				</span>
				<span class="icon is-small is-right" v-else >
					<i class="fa fa-exclamation-triangle"></i>
				</span>
			</div>
			
			<p v-if="!item.check(item.value)" class="help is-danger">Votre {{ item.name }} est invalide</p>
		</div>
		</div>
		<button class="button is-primary center mt-4" :disabled="loginDisabled()" @click="login">Se connecter</button>
	</div>
</template>



<script lang="ts">

function len( str:string , num:number ){
	return str.length > num
}

import axios from 'axios'
import { Options, Vue } from 'vue-class-component';
export default class loginForm extends Vue {

	login(){
		console.log( axios , this.inputs )

		if( !this.loginDisabled()){
			console.log( "do stuff" )
		}
	}

	loginDisabled(){
		for (let i = 0; i < this.inputs.length; i++) {
			const el = this.inputs[i];

			if(!el.check( el.value )){
				return true
			}
		}

		return false;
	}

	//(nom, prénom, adresse mail, numéro de téléphone, adresse, ville,pays)
	inputs = [
		{
			name : "Adresse mail",
			check : function(str:string){
				const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  				return re.test(str);
			},
			value : "",
			type : "email",
		},
		{
			name : "Mot de passe",
			check : function(str:string){return len(str,6)},
			value : "",
			type : "password",
		},
	]
	
}

</script>