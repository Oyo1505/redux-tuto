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
	});

	it('exampleMethode_updatesState, should upadte state as expected ',()=> {

		const classInstance = wrapper.instance();
		classInstance.exampleMethode_updatesState();
		const newState = classInstance.state.hideBtn;
		expect(newState).toBe(true);
	});

	it('exampleMethode_returnaValue should return a value as expected', ()=> {
		const classInstance = wrapper.instance();
		const newValue = classInstance.exampleMethode_returnaValue(6);
		expect(newValue).toBe(7);



	})	

}) 