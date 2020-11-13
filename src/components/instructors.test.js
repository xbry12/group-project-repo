import React from 'react'
import { shallow } from 'enzyme'

import Instructors from './instructors'

describe('Instructors component', () => {

  let component
  beforeEach(() => {
    component = shallow(<Instructors />)
  })
  
  // add the rest of the tests here
  it('should have a class name of Instructors' , () => {
    expect(component.contains(<h1 className='Instructors'></h1>)).toBe(true)
  })


})