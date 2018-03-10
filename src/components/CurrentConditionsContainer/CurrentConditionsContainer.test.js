import React from 'react'
import renderer from 'react-test-renderer';

import CurrentConditionsContainer from './'

describe('CurrentConditionsContainer', () => {
  const wrapper = renderer.create(<CurrentConditionsContainer />)

  it('renders without crashing', () => {
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  describe("handling search query change", () => {

    it('updates the city', () => {
      const instance = wrapper.root.instance
      instance.handleQueryChange({city: 'Ann Arbor'})
      expect(instance.state.city).toEqual('Ann Arbor')
    })
  })
})
