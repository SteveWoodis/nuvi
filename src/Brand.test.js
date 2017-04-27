import React from 'react';
import Brand from './Brand';

it('should return correct number of users on valid brand', () => {
  const brand = new Brand();
  const users = [{provider: 'silly'}, {provider: 'silly'}, {provider: 'hickup'}];
  const totalUsers = brand.getTotalUsers(users, 'hickup');
  if(totalUsers !== 1){
    throw Error('incorrect number of users');
  }
});
//getTotalLikes
it('should return total number of likes', () => {
  const brand = new Brand();
  const users = [{provider: 'silly'}, {provider: 'silly'}, {provider: 'hickup'}];
  const totalLikes = brand.getTotalLikes(users, 'silly');
  if(totalLikes !== 2){
    throw Error('incorrect number of likes');
  }
});
//getTotalShares
it('should return total number of shares', () => {
  const brand = new Brand();
  const users = [{provider: 'iffy'}, {provider: 'iffy'}, {provider: 'backscratcher'}];
  const totalShares = brand.getTotalShares(users, 'iffy');
  if(totalShares !== 2){
    throw Error('incorrect number of shares');
  }
});
//getLastActiveDate

//getItemMap
it('should return table with values at top of page', () => {
  const brand = new Brand();
  const users = [{}]
});
//getProviders
it('should return the name of the provider to pass along with the array')
