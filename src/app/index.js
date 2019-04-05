import React from "react"
import ReactDOM from "react-dom"


import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Abc } from "./components/Abc"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      homeLink: "hello"
    }
  }
  onGreet(){
      alert("Hello")
  }
  onChangeLinkName(newName){

    this.setState({
      homeLink: newName
    })

  }
  render(){

    return(
      <div className = "container">
          <div>
            <Abc homeLink = {this.state.homeLink}
          />
          </div>
          <div>
            <Header name = {"harsh"}
            place = {"delhi"}
            initialAge = {22}
            greet = {this.onGreet}
            changeLink = {this.onChangeLinkName.bind(this)}
            linkname = {this.state.homeLink}
            />
          </div>


      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
