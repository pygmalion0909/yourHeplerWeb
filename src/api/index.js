import axios from 'axios';

function signupMember(memberData) {
	const url = 'http://localhost:8080/api/v1/member/create';
	return axios.post(url, memberData);
}

export { signupMember };
