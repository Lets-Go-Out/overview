import React from 'react';
import Glyphicon from './Glyphicon.jsx';

const LocTags = (props) => {
  const locTagsJsx = [];

  const fullAddress = [
    [`${props.restaurant.address_line_1} `],
    [props.restaurant.address_line_2 !== 'null' ? `${props.restaurant.address_line_2} ` : ''],
    [`${props.restaurant.city}, `],
    [`${props.restaurant.state} `],
    [`${props.restaurant.zip} `],
  ];

  const locationalTags = [
    ['Address', fullAddress],
    ['Cross Street', props.restaurant.cross_street],
    ['Parking Details', props.restaurant.parking_details],
    ['Public Transit', props.restaurant.public_transit],
    ['Neighborhood', (<span className="neighborhood_link" onClick={() => alert('Feature Not Available')}>{props.restaurant.neighborhood}</span>)],
  ];

  for (let i = 0; i < locationalTags.length; i += 1) {
    if (locationalTags[i][1] !== 'NULL') {
      locTagsJsx.push((
        <div className="detail media">
          <div className="media-left">
            <Glyphicon tagName={locationalTags[i][0]} />
          </div>
          <div className="media-body">
            <h4 className={`tag_name ${locationalTags[i][0].split(' ').join('_')}_name media-heading`}>{locationalTags[i][0]}</h4>
            <p className={`tag_description ${locationalTags[i][0].split(' ').join('_')}_description`}>{locationalTags[i][1]}</p>
          </div>
        </div>
      ));
    }
  }

  return (
    <div>
      {locTagsJsx}
    </div>
  );
};

export default LocTags;
