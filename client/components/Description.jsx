import React from 'react';

const Description = (props) => {
  const truncatedDescription = props.description.slice(0, 180);
  const locationalTags = [
    ['Address', fullAddress],
    ['Cross Street', this.state.currentRestaurant.cross_street],
    ['Parking Details', this.state.currentRestaurant.parking_details],
    ['Neighborhood', (<span className="neighborhood_link" onClick={() => alert('Feature Not Available')}>{this.state.currentRestaurant.neighborhood}</span>)],
  ];

  return (
    <div className="description">
      <p className="description_paragraph">
        {
          props.showFullDescriptionState
            ? props.description
            : `${truncatedDescription}`
        }
        <span
          display={
            props.showFullDescriptionState
              ? 'none'
              : 'flex'
          }
          className="description_read_more"
          onClick={props.showFullDescription}
        >
          {
            ` + ${
              props.showFullDescriptionState
                ? 'Show Less'
                : 'Read More'
            }`
          }
        </span>
      </p>
  </div>
  );
};

export default Description;
