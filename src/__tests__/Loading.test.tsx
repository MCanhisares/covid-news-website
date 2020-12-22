import { mount } from 'enzyme'
import React from 'react'
import { Loading } from '../common/loading'

describe('Loading', () => {
  it('renders without crashing', () => {
    const component = mount(<Loading />)
    expect(component).toBeTruthy()
  })
})
