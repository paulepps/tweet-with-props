import React from "react";
import Avatar from "./Avatar";
import Message from "./Message";
import NameWithHandle from "./NameWithHandle";

const Tweet = () => (
  <div className="tweet">
    <Avatar />
    <div className="content">
      <NameWithHandle />
      <Time />
      <Message />
      <div className="buttons">
        <ReplyButton />
        <RetweetButton />
        <LikeButton />
        <MoreOptionsButton />
      </div>
    </div>
  </div>
);

const Time = () => <span className="time">3h ago</span>;
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

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

export default Tweet;
