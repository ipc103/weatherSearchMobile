import React from 'react'
import renderer from 'react-test-renderer';

import CurrentConditionsContainer from './'

describe('CurrentConditionsContainer', () => {
  const wrapper = renderer.create(<CurrentConditionsContainer />)

  it('renders without crashing', () => {
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  describe("handling search query change", () => {
    const instance = wrapper.root.instance

    it('updates the city', () => {
      instance.handleQueryChange({city: 'Ann Arbor'})
      expect(instance.state.city).toEqual('Ann Arbor')
    })

    it('updates the region', () => {
      instance.handleQueryChange({region: 'MI'})
      expect(instance.state.region).toEqual('MI')
    })
  })
})
