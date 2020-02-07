import React from 'react'
import { getDogFacts } from './api'

class DogFacts extends React.Component {
  state = {
    dogFact: ''
  }

  componentDidMount () {
    getDogFacts() // Connect to dogfact select in commands.js
      .then(response => {
        this.setState({
          dogFact: response.body
        })
      })
  }

  render () {
    return (
      <>
        <h2 className="subtitle">Did you know..</h2>
        <p>{this.state.dogFact}</p>
      </>
    )
  }
}

export default DogFacts
