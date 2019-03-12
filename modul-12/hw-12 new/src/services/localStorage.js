'use strict'

export const set = value => {
    localStorage.setItem('site-links', JSON.stringify(value));
  };
  
  export const get = () => {
    const data = localStorage.getItem('site-links');
  
    return data ? JSON.parse(data) : null;
  };