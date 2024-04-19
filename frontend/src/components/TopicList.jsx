import React from "react";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

import "../styles/TopicList.scss";



const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <li key={topic.id}>
          <TopicListItem topic={{
            id: topic.id,
            slug: topic.slug,
            title: topic.title
          }} />
        </li>
      ))}
    </div>
  );
};

export default TopicList;
