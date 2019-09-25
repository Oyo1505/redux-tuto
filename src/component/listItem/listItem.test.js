import React from 'react';
import "../../setupTest";
import { shallow } from 'enzyme';
import {findByTestAttr, checkProps} from './../../../Utils';
import ListItem from './index';


describe('ListItem COmponent', ()=>{

	describe('Chekickg proptypes', ()=>{

			it('Should NOt throw a warningf', ()=>{
			
				const expectedProps = {
					title: 'ddd',
					desc : 'exemple desc',
				};

				const propsErrors = checkProps(ListItem, expectedProps);

				expect(propsErrors).toBeUndefined();
			});
	});

	describe('Compoenent Renders', () => {
		let wrapper;

		beforeEach(()=> {
			const props = {
					title: 'ddd',
					desc : 'exemple desc',
				};
				wrapper = shallow(<ListItem {...props} /> );

		})

		it('Should render without error', ()=> {

			const component = findByTestAttr(wrapper, 'ListItemComponent');

			expect(component.length).toBe(1);
		})

		it('Should renfder a title', ()=> {
			const title = findByTestAttr(wrapper, 'componentTitle');
			expect(title.length).toBe(1);
		});

		it('Sould be render a desc', ()=> {
			const desc = findByTestAttr(wrapper, 'componentDesc');
			expect(desc.length).toBe(1);
		})
	});


	describe('Sould NOt Render', ()=>{
			let wrapper;

		beforeEach(()=> {
			const props = {
					desc : 'exemple desc',
				};
				wrapper = shallow(<ListItem {...props} /> );

		});

		it('Component is not render title', ()=>{
			const component = findByTestAttr(wrapper, 'ListItemComponent');

			expect(component.length).toBe(0)
		})

	} );

} );
