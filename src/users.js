import React, {Component} from 'react';
var newRecords = [];
class Users extends Component{
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    fetch('https://nuvi-challenge.herokuapp.com/activities')
      .then(function (response) {
        return response.json()
      }).then(function (json) {
      newRecords = json;
      this.setState({items: json});
      return newRecords;
    })
  }


  render(){
    let items = this.state.items;
    return(
      <div>
        {items.map(item => <h5 key={item.title} style={{marginLeft: '15px'}}>{item.title}</h5>)}
      </div>
    )
  }
}
export default Users;