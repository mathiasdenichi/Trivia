import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MainHeader from '../'

configure({ adapter: new Adapter() })

describe('Render trivia quiz questions', () => {
  const wrapper = mount(<MainHeader />)
  const skin = shallow(<MainHeader />)

  it('Renders and matches a snap shot.', () => {
    expect(skin).toMatchSnapshot()
  })

  it('Checks an answer to the user inputed bool, and sets state and page number', () => {
    wrapper.instance().checkAnswer()
    wrapper.setState({
      questionPage: 1,
    })
    expect(wrapper.state().questionBank).toBeTruthy()
    expect(wrapper.state().questionPage).toBeGreaterThan(0)
  })
})
