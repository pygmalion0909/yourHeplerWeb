<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="username">아이디</label>
				<input type="text" id="username" v-model="username" />
			</div>
			<div>
				<label for="password">비밀번호</label>
				<input type="text" id="password" v-model="password" />
			</div>
			<button type="submit">로그인</button>
		</form>
	</div>
</template>

<script>
import { loginMember } from '@/api/index';

export default {
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		async submitForm() {
			const loginData = {
				username: this.username,
				password: this.password,
			};
			console.log('loginData>> ', loginData);
			const loginResult = await loginMember(loginData);
			console.log('loginResult>>', loginResult);
		},
	},
};
</script>

<style></style>
