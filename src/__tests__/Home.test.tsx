import React from 'react'
import { render } from '@testing-library/react'
import { Home } from '../home'

test('renders learn react link', () => {
  const component = render(<Home />)

  expect(component).toBeTruthy()
})
