import React from 'react';
import Glyphicon from './Glyphicon.jsx';

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
    nonAdditionalNonLocationalTags.unshift(['Private Dining', props.restaurant.private_dining === '0' ? 'NULL' : (<span className="private_dining_text">View Private Dining Options</span>)]);
  }

  for (let i = 0; i < nonAdditionalNonLocationalTags.length; i += 1) {
    if (nonAdditionalNonLocationalTags[i][1] !== 'NULL') {
      nonALTagsJsx.push((
        <div className="detail media">
          <div className="media-left">
            <Glyphicon tagName={nonAdditionalNonLocationalTags[i][0]} />
          </div>
          <div className="media-body">
            <h4 className={`tag_name ${nonAdditionalNonLocationalTags[i][0].split(' ').join('_')}_name media-heading`}>{nonAdditionalNonLocationalTags[i][0]}</h4>
            <div className={`tag_description ${nonAdditionalNonLocationalTags[i][0].split(' ').join('_')}_description`}>{nonAdditionalNonLocationalTags[i][1]}</div>
          </div>
        </div>
      ));
    }
  }


  return (
    <div className="NonALTagsDiv col-md-6">
      {nonALTagsJsx}
    </div>
  );
};

export default NonALTags;
