import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MainContentHeader from '../MainContentHeader'


configure({ adapter: new Adapter() })

describe('Main Content Header', () => {
  const wrapper = shallow(<MainContentHeader />)
  it('renders the component and matches it to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
