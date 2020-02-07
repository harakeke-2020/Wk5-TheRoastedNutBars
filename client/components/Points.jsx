import React from 'react'

class Points extends React.Component {
  state = {
    catPoints: 0,
    dogPoints: 0
  }

  dogHandler = evt => {
    this.setState({
      dogPoints: this.state.dogPoints + 1
    })
  }

  catHandler = evt => {
    this.setState({
      catPoints: this.state.catPoints + 5
    })
  }

  render () {
    return (
    <>
      Cats: {this.state.catPoints} vs {this.state.dogPoints} :Dogs

      <button onClick={this.catHandler}>Cat Wins</button>
      <button onClick={this.dogHandler}>Dog Wins</button>
    </>
    )
  }
}

export default Points
