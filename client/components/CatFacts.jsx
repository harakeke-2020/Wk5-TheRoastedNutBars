import React from 'react'

import { getFacts } from './api'

class CatFacts extends React.Component {
  state = {
    catFactUrl: '',
    catFactUrl2: ''
  }

  componentDidMount () {
    getFacts()
      .then(response => {
        const randomNumber = Math.floor(Math.random() * Math.floor(response.body.resp.all.length))
        const randomNumber2 = Math.floor(Math.random() * Math.floor(response.body.resp.all.length))

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
