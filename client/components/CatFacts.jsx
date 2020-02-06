import React from 'react'

import { getFacts } from './api'

const randomNumber = Math.floor(Math.random() * Math.floor(200))
const randomNumber2 = Math.floor(Math.random() * Math.floor(200))


class CatFacts extends React.Component {
  state = {
    catFactUrl: '',
    catFactUrl2: ''
  }

  componentDidMount () {
    getFacts()
      .then(response => {
        this.setState({
          catFactUrl: response.body.resp.all[randomNumber].text,
          catFactUrl2: response.body.resp.all[randomNumber2].text
        })
      })
  }

  render () {
    return (
      <>
        <h2>Cat Facts</h2>
        <p>{this.state.catFactUrl}</p>
        <p>{this.state.catFactUrl2}</p>
      </>
    )
  }
}

export default CatFacts
