import React from "react"

export class Header extends React.Component{
  render(){
    return(
        <div>
          <p>Name is : {this.props.name}</p>
          <p>Place is :{this.props.place}</p>
          <p>Age is : {this.props.age}</p>

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
            <hr/>
            {this.props.children}

          </div>

        </div>
    )
  }
}

// Header.propTypes = {
//   name: React.propTypes.string,
//   place: React.propTypes.place,
//   age: React.propTypes.number,
//   user: React.propTypes.object
// }
