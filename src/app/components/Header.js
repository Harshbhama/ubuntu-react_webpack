import React from "react"

export class Header extends React.Component{
  render(){
    return(
        <div>
          <p>Name is : {this.props.name}</p>
          <p>Place is :{this.props.place}</p>

          <div>
            <p>User name is : {this.props.user.name}</p>
          </div>
          <div>
            <ul>
              {this.props.user.hobbies.map(function(item,i){
                return(
                    <li key = {i}>{item}</li>
                )
              })}
            </ul>
          </div>

        </div>
    )
  }
}
