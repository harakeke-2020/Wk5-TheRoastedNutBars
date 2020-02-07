import React from 'react'

import { getCats } from './api'
import CatFacts from './CatFacts'

export default class Cats extends React.Component {
  state = {
    file: '',
    loading: true
  }

  componentDidMount () {
    getCats()
      .then(response => {
        this.setState({
          file: response.body.file,
          loading: false
        })
      })
  }

  clickHandler = (evt) => {
    this.setState({ loading: true })
    this.props.pointClick()
    getCats()
      .then(response => {
        this.setState({
          file: response.body.file,
          loading: false
        })
      })
  }

  render () {
    return (
      <>
      {this.state.loading
        ? <div>Loading...</div>
        : (<img
          src={this.state.file}
          onClick={this.clickHandler}
          className="image is-500x500"/>)}
      </>
    )
  }
}
