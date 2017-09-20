import expect from 'expect';
import React from 'react';
import CourseForm from './CourseForm';
import {mount, shallow} from 'enzyme';

function setup(saving = false) {
	const props = {
		course: {}, 
		allAuthors: new Array(),
		onSave: () => {},
		onChange: () => {},
		saving: saving,
		errors: {}
	};
	return shallow(<CourseForm {...props}/>);
}

describe("<CourseForm />", () => {
	it("renders form", () => {
		const rendered = setup();
		expect(rendered.find('form').length).toBe(1);
	});

	it("renders h1 tag", () => {
		const rendered = setup();
		expect(rendered.find('h1').text()).toEqual('Manage Course');
	})

	it("labels save button as 'Saving...' when it is saving", () => {
		const rendered = setup(true);
		expect(rendered.find('input').props().value).toEqual('Saving...');
	})

	it("has course, onChange, onSave props", () => {
		const rendered = setup();
	})
})