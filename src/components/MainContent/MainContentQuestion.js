import React from 'react'
import PropTypes from 'prop-types'

const Question = ({ question }) => (
  <div
    key={`${question}-questions`}
    id='questionBox'
    name='questionBox'
  >
    <p>
      {question}
    </p>
  </div>
)

Question.propTypes = {
  question: PropTypes.string,
}
Question.defaultProps = {
  question: '',
}

export default Question
