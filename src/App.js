// import React, { Component } from "react"
import React, { useEffect } from "react"
import { connect } from 'react-redux'

import AddForm from './components/AddForm'
import SmurfList from './components/SmurfList'
import Header from './components/Header'

import { fetchSmurfs } from './actions'

import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

// class App extends Component {
function App(props) {

  useEffect(() => {
    props.fetchSmurfs()
  }, [])

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  )
}
// }

const mapStateToProps = ( state ) => {
  return {
    name: state.name,
    nickname: state.nickname,
    position: state.position,
    summary: state.summary
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App)
// export default connect(mapStateToProps)(App)

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.