import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ score, reset, checkAnswer }) => (
  <div>
    <button onClick={() => checkAnswer("True")}>True</button>
    <button onClick={() => checkAnswer("False")}>False</button>
    <button onClick={reset}>Reset</button>
  </div>
)

Nav.propTypes = {
  score: PropTypes.number,
  reset: PropTypes.func,
}

Nav.defaultProps = {
  score: undefined,
  reset: (value) => {this.setState({ value })}
}

export default Nav
