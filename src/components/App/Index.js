import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'

import MainContent from '../MainContent'

import './App.css'

class App extends Component {
  state = {
    questions: [],
  }
  
  componentDidMount() {
    this.fetchQuestions()
  }

  fetchQuestions = async () => {
    try {
      const res = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      const { data } = res
      return this.setState({
        questions: data.results,
      })
    } catch (err) {
      return err
    }
  }

  render() {
    const { questions } = this.state
    console.log(questions)
    return (
      <MainContent
        questions={questions}
        fetchQuestions={this.fetchQuestions}
      />
    )
  }
}

export default App
