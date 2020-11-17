import React, { Component } from 'react'
import { shallow } from 'enzyme'
import Classes from './classes'
import { render, screen } from '@testing-library/react';




// We will describe a block of tests
describe('Classes component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Classes data={[]}/>)
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<p></p>)).toBe(true)
  })
})




