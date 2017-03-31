import React, {Component} from 'react';
class Brand extends Component {
  constructor() {
    super();
    this.state = {users: []}

    this.getArray = this.getArray.bind(this);
    this.getProviders = this.getProviders.bind(this);
  }

  getArray() {
    let self = this;
    fetch('https://nuvi-challenge.herokuapp.com/activities')
      .then(function (response) {
        return response.json()
      }).then(function (users) {
      self.setState({users});
    }).catch(function (err) {
      console.log("This is an error", err)
    })
    return this.state.users;
  }


  getProviders(){
    function getTotalUsers(users,name){
      let totalUser = 0;
      users.forEach(function(user){
        if(user.provider === name){
          totalUser++;
        }
      console.log("The provider that incremented is: ", name);
        
      })
      return totalUser;
    }
    function getTotalLikes(users, name){
      let totalLikes = 0;
      users.forEach(function (user) {
        if(user.provider === name){
          totalLikes += user.activity_likes;
        }
      })
      return totalLikes;
    }
    function getTotalShares(users, name){
      let totalShares = 0;
      users.forEach(function (user) {
        if(user.provider === name){
          totalShares += user.activity_shares;
        }
      })
      return totalShares;
    }
    function getNewProvider(users,name){
      return {name: name, totalUsers: getTotalUsers(users,name), totalLikes: getTotalLikes(users, name), totalShares: getTotalShares(users,name), lastActiveDate: '03-29-2017'}
    }
    console.log("The array in getProviders", this.state.users);
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
  console.log("The Array in render", this.state.users);
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