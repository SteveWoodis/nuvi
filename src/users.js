import React, {Component} from 'react';
class Users extends Component{
  constructor(){
    super();
    this.state= {items: []}
    this.getArray = this.getArray.bind(this);
  }
  getArray(){
    let self = this;
    fetch('https://nuvi-challenge.herokuapp.com/activities')
      .then(function (response) {
        return response.json()
      }).then(function (items) {
      self.setState({items})
    }).catch(function (err) {
      //todo
      console.log("This is an error", err)
    })
  }

  componentWillMount(){
    let newRecords = [];
    newRecords = this.getArray();
    console.log(newRecords);
      }



  render(){
    let items = this.state.items;
    //let i = 0;
    return(
      <div>
        {items.map(item => (
        <ul style={{textDecoration: 'none'}}>

          <li style={{textDecoration: 'none'}}><h6 key={item.id} style={{marginLeft: '15px'}}>{item.provider}</h6></li>
          <li style={{textDecoration: 'none'}}><h6>URL: <a href={item.activity_url}>{item.activity_url}</a></h6></li>
          <li style={{textDecoration: 'none'}}><h6>Actor's Username: {item.actor_username}</h6></li>
          <li style={{textDecoration: 'none'}}><h6>ID: {item.id}</h6></li>
          <li style={{textDecoration: 'none'}}><h5>Name: {item.actor_name}</h5></li>
          
        </ul>
        ))}

      </div>
    )
  }
}
export default Users;