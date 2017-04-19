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
it('should return total number of likes in each social media category', () => {
  const brand = new Brand();
  const users = [{provider: 'silly'}, {provider: 'silly'}, {provider: 'hickup'}];
  const totalLikes = brand.getTotalLikes(users, 'silly');
  if(totalLikes !== 2){
    throw Error('incorrect number of likes');
  }
});
//getTotalShares

//getLastActiveDate


