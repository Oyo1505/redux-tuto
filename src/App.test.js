import React from 'react';
import App from './App';
import "./setupTest";
import {findByTestAttr, testStore} from './../Utils';
import { shallow } from 'enzyme';

const setUp=( initialState={} )=> {
	const store = testStore(initialState);
	const wrapper = shallow(<App store={store} />).childAt(0).dive();
	return wrapper
};

describe('App Component', ()=> {

	let wrapper;
	beforeEach(()=>{
		const initialState = {
			posts :[
				{
					title: 'exemple title 1',
					body: 'dddd string'
				},
				{
					title: 'exemple title 2',
					body: 'dddd string'
				},
				{
					title: 'exemple title 3',
					body: 'dddd string'
				},]
		}
		wrapper = setUp(initialState);
	});


	it('Should render withou errors', ()=>{
		const component = findByTestAttr(wrapper, 'appComponent');

		expect(component.length).toBe(1);
	})

}) 