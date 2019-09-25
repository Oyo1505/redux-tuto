import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fecthPosts} from './../actions';


describe('fecthPosts action', ()=> {
	beforeEach(()=> {
		moxios.install();
	});

	afterEach(()=>{
		moxios.uninstall();
	});

	test('Store is uptaded correctly', ()=> {
		const expectedState = [
		{
			title: 'Example title',
			body: 'Some text',
		},
		{
			title: 'Example title',
			body: 'Some text',
		},
		{
			title: 'Example title',
			body: 'Some text',
		},
		];

		const store = testStore();

		moxios.wait(()=> {
			const request = moxios.requests.mostRecent();
			request.responseWith({
				status: 200,
				response: expectedState
			})

			return store.dispatch(fecthPosts())
			.then(()=> {
				const newState = store.getState();
				expect(newState.posts).toBe(expectedState);
			});
		});

	});
})