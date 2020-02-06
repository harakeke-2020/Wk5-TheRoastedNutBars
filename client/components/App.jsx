import React from 'react'
import Cats from './Cat'
import CatFacts from './CatFacts'
import Points from './Points'

class App extends React.Component {
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
    <h1 className="title">Cats vs Dogs</h1>
    <Points />
    <Cats />
    <CatFacts />

    </>
    )
  }
}

export default App
