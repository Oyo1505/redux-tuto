import React from 'react';
import { shallow} from 'enzyme';
import Headline from './index';
import "../../setupTest";
import {findByTestAttr} from './../../../Utils';

const setUp = (props={} )=> {
	const component = shallow(<Headline {...props} />);
	return component;
}


describe('Headline Component', ()=> {
	describe('Have props', ()=> {

		let wrapper;

		beforeEach(()=>{
			const props = {
				header: 'Test Header',
				desc: 'some test'
			};
			wrapper = setUp(props);
		});
		it('should render without errors', () =>{
			const component = findByTestAttr(wrapper, 'HeadlineComponent');
			expect(component.length).toBe(1);
		})

		it('Sould render H1', ()=> {
			const h1 = findByTestAttr(wrapper, 'header');
			expect(h1.length).toBe(1);
		})

		it('Sould render desc', ()=> {
			const desc = findByTestAttr(wrapper, 'descWrapper');
			expect(desc.length).toBe(1);
		})
	});


	describe('Have no props', ()=>{
		let wrapper;
		beforeEach(()=> {
			wrapper = setUp();
		});

		it('Sould not render', ()=> {
			const component = findByTestAttr(wrapper,'HeadlineComponent');
			expect(component.length).toBe(0);
		})
	});
});