import {types} from './types';
import axios from 'axios';


export const fetchPosts = () => async (dispacth) => {
	await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
	.then(res => {
		dispacth({
			type: types.GET_POSTS,
			payload: res.data,
		})
	})
	.catch(err => {
		//console.log(err)
	} );
}



