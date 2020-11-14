import React from 'react'
import { shallow } from 'enzyme'

import Classes from './classes'

describe('Classes component', () => {

  let component
  beforeEach(() => {
    component = shallow(<Classes />)
  })
  
  it('should have a class name of class', () => {
    expect(component.contains(<h1 className='class'></h1>)).toBe(true)
  })

})

