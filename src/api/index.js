import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8080/api/v1',
});

function signupMember(memberData) {
	//아래 주석 2줄은 instance.post('url', memberDate);로 줄일 수 있다.
	// const url = 'http://localhost:8080/api/v1/member/create';
	// return axios.post(url, memberData);
	return instance.post('/member/create', memberData);
}

function loginMember(loginData) {
	var formData = new FormData();
	formData.append('username', loginData.username);
	formData.append('password', loginData.password);
	return instance.post('/login', formData);
}

export { signupMember, loginMember };
