import React, {Component} from 'react';
class Users extends Component{
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    fetch('https://nuvi-challenge.herokuapp.com/activities')
      .then(response => response.json())
      .then(json => this.setState({ items: json.data }));
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