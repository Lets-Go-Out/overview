import React from 'react';
import $ from 'jquery';
import getGlyph from './getGlyph.jsx';
import bs from 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/overview_styles.css';

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
    ['Neighborhood', (<span onClick={() => alert('Feature Not Available')}>{props.restaurant.neighborhood}</span>)],
  ];

  for (let i = 0; i < locationalTags.length; i += 1) {
    if (locationalTags[i][1] !== 'NULL') {
      locTagsJsx.push((
        <div styleName="bs.media" key={i}>
          <div styleName="bs.media-left">
            {getGlyph(locationalTags[i][0])}
          </div>
          <div styleName="bs.media-body">
            <div styleName="styles.tag_name bs.media-heading">
              {locationalTags[i][0]}
            </div>
            <p
              styleName={
                ['Neighborhood_description', 'Address_description'].includes(`${locationalTags[i][0].split(' ').join('_')}_description`)
                  ? `styles.${locationalTags[i][0].split(' ').join('_')}_description`
                  : ''
              }
            >
              {locationalTags[i][1]}
            </p>
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
