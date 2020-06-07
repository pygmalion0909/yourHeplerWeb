<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="">id: </label>
				<input id="loginId" type="text" v-model="loginId" />
			</div>
			<div>
				<label for="">password: </label>
				<input id="password" type="text" v-model="password" />
			</div>
			<div>
				<label for="">nickName: </label>
				<input id="nickName" type="text" v-model="nickName" />
			</div>
			<button type="submit">회원가입</button>
		</form>
	</div>
</template>

<script>
import { signupMember } from '@/api/index';

export default {
	data() {
		return {
			loginId: '',
			password: '',
			nickName: '',
		};
	},
	methods: {
		async submitForm() {
			console.log('제출!');
			const memberDate = {
				loginId: this.loginId,
				password: this.password,
				nickName: this.nickName,
			};

			let singupResult = await signupMember(memberDate);

			//result
			console.log('회원가입결과>>', singupResult);
		},
	},
};
</script>

<style></style>
