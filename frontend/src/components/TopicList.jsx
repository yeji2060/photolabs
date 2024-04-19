import React from "react";
import TopicListItem from "./TopicListItem";


import "../styles/TopicList.scss";



const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.map(topic => (
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
