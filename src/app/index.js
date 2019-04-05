import React from "react"
import ReactDOM from "react-dom"


import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component{
  onGreet(){
      alert("Hello")
  }
  render(){

    return(
      <div className = "container">

          <Header name = {"harsh"} place = {"delhi"} initialAge = {22} greet = {this.onGreet} />
          <Home homeLink = "yes"/>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
