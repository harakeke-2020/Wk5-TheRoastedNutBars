import React from 'react'

import { getCats } from './api'
import CatFacts from './CatFacts'

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

  clickHandler = (evt) => {
    this.props.pointClick()
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
        <img src={this.state.file} width="500" onClick={this.clickHandler}/>
      </>
    )
  }
}
