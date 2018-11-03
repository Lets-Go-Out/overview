import React from 'react';
import Glyphicon from './Glyphicon.jsx'; /* eslint-disable-line */

const Summary = (props) => {
  let starsJsx = [];
  const numOfStarHalves = props.review_average / 5;
  for (let i = 0; i < numOfStarHalves; i += 2) {
    starsJsx.push((<span className={'glyphicon glyphicon-star'} />));
  }
  let priceRange;
  switch (props.price_range) {
    case '$':
      priceRange = ' 30 and under ';
      break;
    case '$$':
      priceRange = ' 30 and under ';
      break;
    case '$$$':
      priceRange = ' 31 to 50 ';
      break;
    case '$$$$':
      priceRange = ' 50 and over ';
      break;
    case '$$$$$':
      priceRange = ' 50 and over ';
      break;
    default:
      priceRange = ' Oops! Something went wrong...';
      break;
  }
  return (
    <div className="summaryDiv row col-md-10 col-md-offset-1">
        <div className="review_average col-md-2 col-sm-4">
          <span className="review_average_stars">
            {starsJsx}
            {' '}
          </span>
          <span className="review_average_number">
            {`${props.review_average / 10} `}
          </span>
        </div>
      <div className="review_count col-md-3 col-sm-8">
          <Glyphicon tagName="Review Count" />
          {` ${props.review_count} reviews `}
      </div>
      <div className="price_range col-md-3 col-sm-4">
        <Glyphicon tagName="Price Range" />
        {priceRange}
      </div>
      <div className="cuisine_type col-md-3 col-sm-8">
        <Glyphicon tagName="Cuisine Type" />
        {` ${props.cuisine_types[0]} `}
      </div>
    </div>
  );
};

export default Summary;
