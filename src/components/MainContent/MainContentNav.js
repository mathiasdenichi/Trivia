import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ reset, checkAnswer }) => (
  <div id='navcontainer'>
    <div id='nav'>
      <button
        onClick={() => checkAnswer('True')}
        id='trueBtn'
      >
      True
      </button>
      <button
        onClick={() => checkAnswer('False')}
        id='falseBtn'
      >
    False
      </button>
    </div>
    <button
      onClick={reset}
      id='resetBtn'
    >
      Reset
    </button>
  </div>
)

Nav.propTypes = {
  reset: PropTypes.func,
  checkAnswer: PropTypes.func,
}

Nav.defaultProps = {
  reset: (value) => { this.setState({ value }) },
  checkAnswer: (value) => { value.find() },
}

export default Nav
