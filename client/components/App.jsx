import React from 'react'
import Cats from './Cat'
import CatFacts from './CatFacts'
import Dogs from './Dog'
import DogFacts from './DogFacts'
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
      catPoints: this.state.catPoints + 1
    })
  }

  componentDidMount () {

  }

  // scoreHandler = evt => {
  //   this.setState({
  //     dogPoints: this.state.dogPoints + 1,
  //     catPoints: this.state.catPoints + 2
  //   })
  // }

  render () {
    return (
      <div className="container">
        <h1 className="title is-1, has-text-primary">Cutey Pageant</h1>
        <div className="columns">
          <div className="column">
            <Cats pointClick={this.catHandler} />
            <p className="has-text-primary, title is-2"> Cat Score: {this.state.catPoints} </p>
            <CatFacts />
          </div>

          <div className="column">
            <Dogs pointClick={this.dogHandler}/>
            <p className="has-text-primary, title is-2"> Dog Score: {this.state.dogPoints}</p>
            <DogFacts />

          </div>
        </div>
      </div>
    )
  }
}

export default App
