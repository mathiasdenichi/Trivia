import React from 'react'
import PropTypes from 'prop-types'

const Question = ({ question }) => (
  <div
    key={Math.random()}
    id='questionBox'
    name='questionBox'
  >
    <p>
      {question}
    </p>
  </div>
)

Question.propTypes = {
  question: PropTypes.string.isRequired,
}

export default Question
