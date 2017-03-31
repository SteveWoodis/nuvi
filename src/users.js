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
      console.log("This is an error", err)
    })
  }

  componentWillMount(){
    this.getArray();
  }
  

  render(){
    let items = this.state.items;
    return(
      <div className="recordBreak">
        {items.map(item => (
        <ul  key={item.id} style={{listStyleType: 'none'}}>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>Social Media Provider: {item.provider}</h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>Actor's Username: {item.actor_username}</h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>Actor's Name: {item.actor_name}</h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>URL: <a href={item.activity_url}>{item.activity_url}</a></h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5><strong>Last Active Message: </strong>{item.activity_message}</h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>Activity Date: {item.activity_date}</h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>Actor Avatar: <img src={item.actor_avator} alt="" style={{height:'50px',width:'50px'}}/></h5></li>
        </ul>
        ))}
      </div>
    )
  }
}
export default Users;
//todo  need to test for empty activity_message. if = to https://placehold.it/500x500.jpeg/ffffff/000 replace with "no current message"