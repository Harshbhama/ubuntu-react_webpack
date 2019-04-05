import React from "react"

export class Header extends React.Component{
  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      newhomelink: "Changed Link",
      status: 0
    }
    setTimeout(() => {
        this.setState({
          status: 1
        })
    },3000)
  }

  onMakeOlder(){
    this.setState({
      age: this.state.age +3
    })
    console.log(this.age)
  }
  onChangeLink(){
    this.props.changeLink(this.state.newhomelink)
  }
  render(){
    return(
        <div>
          <p>Name is : {this.props.name}</p>
          <p>Place is :{this.props.place}</p>
          <p>Age is : {this.state.age}</p>
          <p>Status is : {this.state.status}</p>
          <hr/>
          <button onClick = {this.onMakeOlder.bind(this)} className = "btn btn-primary"> Click ME </button>
          <hr/>
          <button onClick = {this.props.greet} className = "btn btn-primary"> Greet ME </button>
          <hr/>
          <button onClick = {this.onChangeLink.bind(this)} className = "btn btn-primary"> Change Homelink </button>

        </div>
    )
  }
}

// Header.propTypes = {
//   name: React.PropTypes.string,
//   place: React.PropTypes.place,
//   age: React.PropTypes.number,
//   user: ReactPropTypes.object
// }
