import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr} from './../../../Utils' 
import Header from './index';
import "../../setupTest";

const setUp = (props = {}) => {
	const component = shallow(<Header  {...props}/>);
		return component;
};



describe('Header Component', ()=> {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	describe('Nested', ()=>{
		it('Sould render with no erros', ()=> {
			const wrapper = findByTestAttr(component,'headerComponent');
			expect(wrapper.length).toBe(1);
		});
 
		it('Should render a logo', () => {
			const logo = findByTestAttr(component,'logoIMG' )
			expect(logo.length).toBe(1);

		});
	})
	
})
