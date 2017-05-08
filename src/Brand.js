import React, {Component} from 'react';

class Brand extends Component {
  constructor() {
    super();
    this.state = {users: []};

    this.getArray = this.getArray.bind(this);
    this.getProviders = this.getProviders.bind(this);
    this.getItemMap = this.getItemMap.bind(this);
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
    });
    return this.state.users;
  }

  getTotalUsers(users, name) {
    const filteredUser = users
      .filter(function (user) {
        return user.provider === name;
      });
    return filteredUser.length;
  }

  getTotalLikes(users) {
    let totalLikes = 0;
    const filteredLikes = users.reduce(function (totalLikes, user) {
      return totalLikes += user.activity_likes;
    }, 0);
    return filteredLikes;
  }

  getTotalShares(users) {
    let totalShares = 0;
    const filteredShares = users.reduce(function (totalShares, user) {
      return totalShares += user.activity_shares;
    }, 0);
    return filteredShares;
  }

  getLastActiveDate(users, name) {
    let activeDate = '';
    users.forEach(function (user) {
      if (user.provider === name) {
        if (user.activity_date > activeDate) {
          activeDate = user.activity_date;
        }
      }
    });
    return activeDate;
  }

  getNewProvider(users, name) {
    return {
      name: name,
      totalUsers: this.getTotalUsers(users, name),
      totalLikes: this.getTotalLikes(users, name),
      totalShares: this.getTotalShares(users, name),
      lastActiveDate: this.getLastActiveDate(users, name)
    }
  }

  getProviders() {
    const users = this.state.users;
    const providersList = users.reduce(function (acc, user) {
       if (acc.includes(user)) {
        acc.totalUsers++;
        console.log('True. totalUsers',acc.totalUsers);
        if (user.activity_date > acc.lastActivityDate) {
          acc.lastActivityDate = user.activity_date;
        }
      } else {
        console.log('False. made it to else.');
        acc.push(
          {
            name: user.provider,
            totalUsers: 1,
            lastActiveDate: user.activity_date
          })
      }
      return acc;
    }, []);
    console.log('providersList Array', providersList);
    return providersList;
  }

  componentWillMount() {
    this.getArray();
  }

  getItemMap() {
    const providers = this.getProviders();
    const mapArray = providers.map((provider, i) => (

      <tr key={i}>
        <td>{provider.name}</td>
        <td>{provider.totalUsers}</td>
      </tr>
    ));
    return mapArray;
  }

  totalMap() {
    const providers = this.getProviders();
    {
      const i = 1;
      const totals = providers.map((provider) => (
        <div key={i}>
          Total Likes: {provider.totalLikes}<br/>
          Total Shares: {provider.totalShares}<br/>
          Last Activity Date: {provider.lastActiveDate}<br/>
        </div>
      ));
      return totals;
    }
  }

  render() {
    return (
      <header>
        <table>
          <thead>
          <tr>
            <th>Media Channel</th>
            <th><strong>Users</strong></th>
          </tr>
          </thead>
          <tbody>
          {this.getItemMap()}
          </tbody>
        </table>
        {this.totalMap()}
      </header>
    )
  }
}
export default Brand;