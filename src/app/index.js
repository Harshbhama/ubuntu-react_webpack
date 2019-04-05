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

          <Header name = {"harsh"} place = {"delhi"} age = {22} user = {user}>
          <p> This is a paragraph </p>
          </Header>
          <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
