<template>
	<h1>Nastavení účtu</h1>
	<form @submit.prevent="login">
		<input
			type="email"
			name="email"
			id="email"
			ref="email" />
		<input
			type="password"
			name="password"
			id="password"
			ref="password" />
		<button type="submit">Přihlásit se</button>
	</form>
</template>
<script setup>
	import { ref } from 'vue'

	const email = ref(null)
	const password = ref(null)

	const login = async () => {
		console.log(email.value.value)
		console.log(password.value.value)

		const response = await fetch('https://www.petcenter.cz/action/Customer/Login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value.value,
				password: password.value.value,
				__csrf__: 'YUPg6wlBa8d0bf2453f3e875',
			}),
		})
		console.log(response)
	}
</script>
<style lang=""></style>
