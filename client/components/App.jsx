import React from 'react'
import Cats from './Cat'
import CatFacts from './CatFacts'
import Dogs from './Dog'
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
      catPoints: this.state.catPoints + 2
    })
  }

  render () {
    return (
    <>
    <h1 className="title">Cutey Pageant</h1>
    <Cats pointClick={this.catHandler}/>
    <p> Cats:{this.state.catPoints} </p> 
    <CatFacts />
    <Dogs />
    <p>Dog:{this.state.dogPoints}</p>

    </>
    )
  }
}

export default App
