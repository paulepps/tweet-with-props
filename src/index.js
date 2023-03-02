import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './Tweet';

let testTweet = {
    message: "Something about dogs.",
    gravatar: "xyz",
    author: {
      handle: "dogperson",
      name: "IAMA Dog Person",
    },
    likes: 2,
    retweets: 0,
    timestamp: "2022-07-30 21:24:37",
  };
  
  ReactDOM.render(<Tweet/>, document.querySelector('#root'));