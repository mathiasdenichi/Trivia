import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MainContentQuestion from '../MainContentQuestion'

configure({ adapter: new Adapter() })


describe('Main Content Question', () => {
  const wrapper = shallow(<MainContentQuestion />)
  it('renders the component and matches it to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
