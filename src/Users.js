import React, {Component} from 'react';

class Users extends Component {
  constructor() {
    super();
    this.state = {items: []};
    this.getArray = this.getArray.bind(this);
    this.cleanArray = this.cleanArray.bind(this);
  }

  getArray() {
    let self = this;
    fetch('https://nuvi-challenge.herokuapp.com/activities')
      .then(function (response) {
        return response.json()
      })
      .then(function (items) {
        self.setState({items})
      })
      .catch(function (err) {
        console.log("This is an error", err)
      })
  }

  componentWillMount() {
    this.getArray();
  }

  cleanArray() {
    let clutteredRecords = this.state.items;
    let activity = ' https://placehold.it/500x500.jpeg/ffffff/000';
    console.log("records", clutteredRecords);
    clutteredRecords.forEach(function (clutteredRecord) {
      if (clutteredRecord.activity_message !== activity) {
        console.log();
      } else {
        clutteredRecord.activity_message = 'No current activity';
      }

    });
    return clutteredRecords;
  }

  render() {
    this.cleanArray();
    let items = this.state.items;
    return (
      <div className="recordBreak">
        {items.map(item => (
          <ul key={item.id} style={{listStyleType: 'none'}}>
            <li>Actor Avatar: <img src={item.actor_avator} alt="" style={{height: '50px', width: '50px'}}/></li>
            <li>Social Media Provider: {item.provider}</li>
            <li>Actor's Username: {item.actor_username}</li>
            <li>Actor's Name: {item.actor_name}</li>
            <li>URL: <a href={item.activity_url}>{item.activity_url}</a></li>
            <li><strong>Last Active Message: </strong>{item.activity_message}</li>
            <li>Activity Date: {item.activity_date}</li>
          </ul>
        ))}
      </div>
    )
  }
}
export default Users;
//todo  need to test for empty activity_message. if = to https://placehold.it/500x500.jpeg/ffffff/000 replace with "no current message"