import React from 'react';
import Glyphicon from './Glyphicon.jsx'; /* eslint-disable-line */

const Summary = (props) => {
  let starsJsx = [];
  const numOfStarHalves = props.review_average / 5;
  for (let i = 0; i < numOfStarHalves; i += 2) {
    starsJsx.push((<span className={'glyphicon glyphicon-star'} />));
  }
  return (
    <div className="summaryDiv">
      <span className="review_average">
        <span className="review_average_stars">
          {starsJsx}
          {' '}
        </span>
        <span className="review_average_number">
          {`${props.review_average} `}
        </span>
      </span>
      <span className="review_count">
        <Glyphicon tagName="Review Count" />
        {` ${props.review_count} `}
      </span>
      <span className="price_range">{`${props.price_range} `}</span>
      <span className="cuisine_types">
        <Glyphicon tagName="Cuisines" />
        {` ${props.cuisine_types[0]} `}
      </span>
    </div>
  );
};

export default Summary;
