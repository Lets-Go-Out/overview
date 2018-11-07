import React from 'react';
import {
  Media,
} from 'react-bootstrap/lib';
import getGlyph from './getGlyph.jsx';
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
        <Media key={i}>
          <Media.Left>
            {getGlyph(locationalTags[i][0])}
          </Media.Left>
          <Media.Body>
            <Media.Heading styleName="styles.tag_name">
              {locationalTags[i][0]}
            </Media.Heading>
            <p
              styleName={
                ['Neighborhood_description', 'Address_description'].includes(`${locationalTags[i][0].split(' ').join('_')}_description`)
                  ? `styles.${locationalTags[i][0].split(' ').join('_')}_description`
                  : ''
              }
            >
              {locationalTags[i][1]}
            </p>
          </Media.Body>
        </Media>
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
