import React from 'react'
import DogFacts from './DogFacts'
import { getDogs, getDogsAsync, getDogsAsyncWithoutDo } from './api'

export default class Dogs extends React.Component {
  state = {
    dogImage: '',
    loading: true
  }

  componentDidMount () {
    getDogsAsync()
      .then(this.setPupUrl)
  }

  setPupUrl = (url) =>
    this.setState({
      dogImage: url,
      loading: false
    })

  clickHandler = (evt) => {
    this.setState({ loading: true })

    this.props.pointClick()
    getDogsAsync()
      .then(this.setPupUrl)
  }

  render () {
    return (
      <>
        {this.state.loading
          ? <div>Loading...</div>
          : (<img
            src={this.state.dogImage}
            onClick={this.clickHandler}
            className="image is-500x500"/>)}
        </>
    )
  }
}
