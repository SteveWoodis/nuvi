import React, {Component} from 'react';
let newRecords = [];
class Users extends Component{
  constructor(){
    super();
    this.state= {items: []}
  }
  getArray(){
    return fetch('https://nuvi-challenge.herokuapp.com/activities')
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        newRecords = json;
        //newRecords.forEach((item) => this.setState({items: item}));
        console.log("First Array ",newRecords);
       return newRecords;
      })
}
  componentWillMount(){
    this.getArray();
  }


  render(){
    let items = this.state.items;
    return(
      <div>
        {items.map(item => (<h5 key={item.id} style={{marginLeft: '15px'}}>{item.actor_username}</h5>))}
      </div>
    )
  }
}
export default Users;