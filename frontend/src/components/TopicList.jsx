import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <li key={topic.id}>
          <TopicListItem topic={topic} onClick={() => {
            onTopicClick(topic.id);
          }} />
        </li>
      ))}
    </div>
  );
};

export default TopicList;
