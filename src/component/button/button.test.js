import React from 'react';
import "../../setupTest";
import { shallow } from 'enzyme';
import {findByTestAttr, checkProps} from './../../../Utils';
import SharedButton from './index'


describe('SharedButton Component', ()=> {

	describe('Checking Props', ()=>{
		it('Should NOT throw a warning', ()=>{

			const expectedProps = {
				buttonTest: 'text Button',
				emmitEvent :()=> {
								
					},
			};
			const propsError = checkProps(SharedButton, expectedProps)

			expect(propsError).toBeUndefined()
		});

	});
	describe('Renders', ()=>{
		let wrapper;

		beforeEach(()=>{
			const props = {
				buttonTest: 'text Button',
				emmitEvent :()=> {
								
					},
			}
			wrapper = shallow(<SharedButton {...props} />);

		});

		it('Should Render à Button', ()=> {

			const button = findByTestAttr(wrapper, 'buttonComponent');
			expect(button.length).toBe(1);
		})
	})
});

