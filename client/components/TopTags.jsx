import React from 'react';

const TopTags = (props) => {
  let topTagsJsx = [];
  topTagsJsx.push((<span key={0} className={`top_tag ${props.tags[0]}`}>{` ${props.tags[0]}`}</span>));
  for (let i = 1; i < 3 && i < props.tags.length; i += 1) {
    topTagsJsx.push((<span key={i} className={`top_tag ${props.tags[i]}`}>{`, ${props.tags[i]}`}</span>));
  }
  return (
    <div className="top_tags">
      <span>Top Tags:</span>
      {topTagsJsx}
    </div>
  );
};

export default TopTags;
