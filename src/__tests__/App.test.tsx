import { shallow } from 'enzyme'
import React from 'react'
import App from '../app/App'

describe('App', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />)
    expect(component).toBeTruthy()
  })
})
