import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://real-estate-d9a1e.firebaseio.com/'
});

export default instance;