import React, {Component} from 'react';

class Brand extends Component {
  constructor() {
    super();
    this.state = {users: []}

    this.getArray = this.getArray.bind(this);
    this.getProviders = this.getProviders.bind(this);
    // this.getTotalUsers = this.getTotalUsers.bind(this);
    // this.getTotalLikes = this.getTotalLikes.bind(this);
    // this.getTotalShares = this.getTotalShares.bind(this);
  }

  getArray() {
    let self = this;
    fetch('https://nuvi-challenge.herokuapp.com/activities')
      .then(function (response) {
        return response.json()
      }).then(function (items) {
      self.setState({items})
    }).catch(function (err) {
      console.log("This is an error", err)
    })
    return this.state.items;
  }


  getProviders(){
    function getTotalUsers(users, name){
      console.log("Users")
    }
    function getTotalLikes(users){
      console.log("Likes")
    }
    function getTotalShares(users){
      console.log("Shares")
    }
    function getNewProvider(users,name){
      return {name: name, totalUsers: getTotalUsers(users, name), totalLikes: getTotalLikes(users), totalShares: getTotalShares(users), lastActiveDate: '03-29-2017'}
    }
    return [
      getNewProvider(this.state.users, 'facebook'),
      getNewProvider(this.state.users, 'twitter'),
      getNewProvider(this.state.users, 'instagram'),
      getNewProvider(this.state.users, 'tumblr')
    ];
  }


  componentWillMount() {
    this.getArray();
  }
render(){
  const providers = this.getProviders();

  return(
    <header>
      <table>
        <thead>
          <tr>
            <th></th>
            <th><strong>Users</strong></th>
            <th><strong>Likes</strong></th>
            <th><strong>Shares</strong></th>
            <th>Last Active Date</th>
          </tr>
        </thead>
        <tbody>
        {providers.map((provider,i) => (
          <tr key={i}>
            <td>{provider.name}</td>
            <td>{provider.totalUsers}</td>
            <td>{provider.totalLikes}</td>
            <td>{provider.totalShares}</td>
            <td>{provider.lastActiveDate}</td>
          </tr>
            ))}
        </tbody>
      </table>

    </header>
  )
}

}
export default Brand;