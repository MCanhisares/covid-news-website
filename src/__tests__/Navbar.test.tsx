import { mount } from 'enzyme'
import React from 'react'
import { NavBar } from '../common/navbar'

describe('Navbar', () => {
  it('renders without crashing', () => {
    const component = mount(<NavBar />)
    expect(component).toBeTruthy()
  })
})
