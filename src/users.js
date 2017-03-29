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
      <div className="lineBreak">
        {items.map(item => (
        <ul style={{listStyleType: 'none'}}>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5 key={item.id}>Social Media Provider: {item.provider}</h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>Actor's Username: {item.actor_username}</h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>Actor's Name: {item.actor_name}</h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>URL: <a href={item.activity_url}>{item.activity_url}</a></h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5><strong>Last Active Message: </strong>{item.activity_message}</h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>Activity Date: {item.activity_date}</h5></li>
          <li style={{listStyleType: 'none',  padding: '0px', margin: '0px', textAlign:'Left'}}><h5>Actor Avatar: <img src={item.actor_avator} alt="" style={{height:'50px',width:'50px'}}></img></h5></li>
        </ul>
        ))}
      </div>
    )
  }
}
export default Users;