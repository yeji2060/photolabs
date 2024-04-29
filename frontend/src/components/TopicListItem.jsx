import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topic, onClick }) => {
  return (
    <div className="topic-list__item" onClick={() => {
      onClick();
    }}>
      <p>{topic.title}</p>
    </div>
  );
};

export default TopicListItem;
