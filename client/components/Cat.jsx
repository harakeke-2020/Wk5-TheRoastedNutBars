import React from 'react'

import { getCats } from './api'

export default class Cats extends React.Component {
  state = {
    file: ''
  }

  componentDidMount () {
    getCats()
      .then(response => {
        this.setState({
          file: response.body.file
        })
      })
  }

  render () {
    return (
      <>
        <img src={this.state.file} width="500" />
      </>
    )
  }
}
