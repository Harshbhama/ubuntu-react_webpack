import React from "react"
import ReactDOM from "react-dom"

import { Header } from "./components/Header"
import { Home } from "./components/Home"
class App extends React.Component{
  render(){
    var user = {
      name: "Aakash",
      hobbies: ["Sports","sasa"]
    }
    return(
      <div className = "container">

          <Header name = {"harsh"} place = {"delhi"} user = {user}/>
          <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
