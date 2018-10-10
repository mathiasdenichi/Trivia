import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MainContentNav from '../MainContentNav'


configure({ adapter: new Adapter() })

describe('Main Content Nav', () => {
  const wrapper = shallow(<MainContentNav />)
  it('renders the component and matches it to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
