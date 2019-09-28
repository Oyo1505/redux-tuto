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
				emitEvent :()=> {
								
					},
			};
			const propsError = checkProps(SharedButton, expectedProps)

			expect(propsError).toBeUndefined()
		});

	});
	describe('Renders', ()=>{
		let wrapper;
		let mockFunc;
		beforeEach(()=>{
			 mockFunc = jest.fn();
			const props = {
				buttonTest: 'text Button',
				emitEvent : mockFunc
			}
			wrapper = shallow(<SharedButton {...props} />);

		});

		it('Should Render à Button', ()=> {

			const button = findByTestAttr(wrapper, 'buttonComponent');
			expect(button.length).toBe(1);
		});

		it('Should emit callback on click event', ()=>{
			const button = findByTestAttr(wrapper, 'buttonComponent');
			button.simulate('click');
			const callback = mockFunc.mock.calls.length;
			expect(callback).toBe(1)
		});
	})
});

