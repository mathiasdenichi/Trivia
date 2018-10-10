import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MainContentScore from '../MainContentScore'

configure({ adapter: new Adapter() })

describe('Main Content Score', () => {
  const wrapper = shallow(<MainContentScore />)
  it('renders the component and matches it to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
