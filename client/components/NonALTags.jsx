import React from 'react';
import $ from 'jquery';
import getGlyph from './getGlyph.jsx';
import bs from 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/overview_styles.css';

const NonALTags = (props) => {
  const nonALTagsJsx = [];

  const nonAdditionalNonLocationalTags = [
    ['Dining Style', props.restaurant.dining_style],
    ['Cuisines', props.restaurant.cuisine_types.join(', ')],
    ['Hours of Operation', props.restaurant.hours],
    ['Catering', props.restaurant.catering],
    ['Website', props.restaurant.website],
    ['Payment Methods', props.restaurant.payment_options],
    ['Dress Code', props.restaurant.dress_code],
    ['Executive Chef', props.restaurant.executive_chef],
    ['Private Party Contact', props.restaurant.private_party_contact],
    ['Private Party Facilities', props.restaurant.private_party_fac],
    ['Special Events and Promotions', props.restaurant.promos],
  ];

  if (props.restaurant.private_dining !== 'NULL') {
    nonAdditionalNonLocationalTags.unshift(['Private Dining', props.restaurant.private_dining === '0' ? 'NULL' : (<span styleName="styles.private_dining_text">View Private Dining Options</span>)]);
  }

  for (let i = 0; i < nonAdditionalNonLocationalTags.length; i += 1) {
    if (nonAdditionalNonLocationalTags[i][1] !== 'NULL') {
      nonALTagsJsx.push((
        <div styleName="bs.media" key={i}>
          <div styleName="bs.media-left">
            {getGlyph(nonAdditionalNonLocationalTags[i][0])}
          </div>
          <div styleName="bs.media-body">
            <div styleName="styles.tag_name bs.media-heading">
              {nonAdditionalNonLocationalTags[i][0]}
            </div>
            <p
              styleName={
                ['Website_description'].includes(nonAdditionalNonLocationalTags[i][0].split(' ').join('_'))
                  ? `styles.${nonAdditionalNonLocationalTags[i][0].split(' ').join('_')}_description`
                  : ''
              }
            >
              {nonAdditionalNonLocationalTags[i][1]}
            </p>
          </div>
        </div>
      ));
    }
  }


  return (
    <div styleName="bs.col-md-6">
      {nonALTagsJsx}
    </div>
  );
};

export default NonALTags;
