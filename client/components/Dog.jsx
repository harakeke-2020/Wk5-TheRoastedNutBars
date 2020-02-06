import React from 'react'

import { getDogs, getDogsAsync, getDogsAsyncWithoutDo } from './api'

export default class Dogs extends React.Component {
  state = {
    dogImage: ''
  }

  componentDidMount () {
    getDogsAsync()
      .then(this.setPupUrl)
  }

  setPupUrl = (url) =>
    this.setState({
      dogImage: url
    })

  render () {
    return (
      <>
        <img src={this.state.dogImage} width="400" />
      </>
    )
  }
}
