<template>
	<div>
		<AppHeader></AppHeader>
		<!-- to로 설정한 url로 이동 되면 해당 component가 보여짐 -->
		<router-view></router-view>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader,
	},
};
</script>

<style></style>
