import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	//url에 # 제거
	//기본적으로 #이 있는 이유는 알아보자....
	mode: 'history',
	routes: [
		{
			//아래 path로 사용자가 접근 시 바로 redirect에 지정한 url로 이동
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			//사용자가 지정하지 않은 url로 접속한 경우 대응
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});
