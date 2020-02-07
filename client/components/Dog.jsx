import React from 'react'
import DogFacts from './DogFacts'
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

  clickHandler = (evt) => {
    this.props.pointClick()
    getDogsAsync()
      .then(response => {
        this.setState({
          dogImage: response.body.url
        })
      })
  }

  render () {
    return (
      <>
        <img src={this.state.dogImage} width="500" height="500" onClick={this.clickHandler}/>
      </>
    )
  }
}
