import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Header from './MainContentHeader'
import Question from './MainContentQuestion'
import Nav from './MainContentNav'

export default class MainHeader extends Component {
  state = {
    questionPage: undefined,
    score: undefined,
  }
  render() {
    const { questions } = this.props
    const { questionPage, score } = this.state
    return (
      <div>
        { questions ?
          _.map(questions, ({
            category,
            difficulty,
            question,
          }) => (
            <React.Fragment>
              <Header
                questionPage={questionPage}
                category={category}
                difficulty={difficulty}
              />
              <Question
                question={
                  _.unescape(question)
                    .replace(/&#039;/g, "'")
                    .replace(/&epsilon;/g, 'E')
                    .replace(/&Phi;/g, 'Φ')
                }
              />
              <Nav
                score={score}
              />
            </React.Fragment>
          ))
          : null
    }
      </div>
    )
  }
}

MainHeader.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
}
