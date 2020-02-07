import React from 'react'

import { getFacts } from './api'

class CatFacts extends React.Component {
  state = {
    catFactUrl: ''
  }

  componentDidMount () {
    getFacts()
      .then(response => {
        const randomNumber = Math.floor(Math.random() * Math.floor(response.body.resp.all.length))

        this.setState({
          catFactUrl: response.body.resp.all[randomNumber].text
        })
      })
  }

  render () {
    return (
      <>
        <h2 className="subtitle">Did you know...</h2>
        <p>{this.state.catFactUrl}</p>
      </>
    )
  }
}

export default CatFacts
