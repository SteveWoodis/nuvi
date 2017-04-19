import React, {Component} from 'react';

class Brand extends Component {
  constructor() {
    super();
    this.state = {users: []};

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

  getTotalLikes(users, name) {
    let totalLikes = 0;
    users.forEach(function (user) {
      if (user.provider === name) {
        totalLikes += user.activity_likes;
      }
    });
    return totalLikes;
  }

  getTotalShares(users, name) {
    let totalShares = 0;
    users.forEach(function (user) {
      if (user.provider === name) {
        totalShares += user.activity_shares;
      }
    });
    return totalShares;
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
    return [
      this.getNewProvider(this.state.users, 'facebook'),
      this.getNewProvider(this.state.users, 'twitter'),
      this.getNewProvider(this.state.users, 'instagram'),
      this.getNewProvider(this.state.users, 'tumblr')
    ];
  }

  componentWillMount() {
    this.getArray();
  }

  render() {
    const providers = this.getProviders();
    return (
      <header>
        <table>
          <thead>
          <tr>
            <th>Media Channel</th>
            <th><strong>Users</strong></th>
            <th><strong>Likes</strong></th>
            <th><strong>Shares</strong></th>
            <th>Last Active Date</th>
          </tr>
          </thead>
          <tbody>
          {providers.map((provider, i) => (
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