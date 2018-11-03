import React from 'react';

const TopTags = (props) => {
  let topTagsJsx = [];
  topTagsJsx.push((<button key={0} className={`top_tag btn btn-default ${props.tags[0]} col-md-3`}>{` ${props.tags[0]}`}</button>));
  for (let i = 1; i < 3 && i < props.tags.length; i += 1) {
    topTagsJsx.push((<button key={i} className={`top_tag btn btn-default ${props.tags[i]} col-md-3`}>{`${props.tags[i]}`}</button>));
  }
  return (
    <div className="top_tags row col-md-10 col-md-offset-1">
      <h3>
        <span className="col-md-3 col-lg-2">Top Tags:</span>
        {topTagsJsx}
      </h3>
    </div>
  );
};

export default TopTags;
