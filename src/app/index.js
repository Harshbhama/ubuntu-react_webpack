import React from "react"
import ReactDOM from "react-dom"


import { Header } from "./components/Header"
import { Home } from "./components/Home"
class App extends React.Component{
  render(){

    return(
      <div className = "container">

          <Header name = {"harsh"} place = {"delhi"} initialAge = {22} />
          <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
