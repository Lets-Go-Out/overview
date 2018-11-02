import React from 'react';
import Glyphicon from '../Glyphicon.jsx';
import PrivateDining from '../PrivateDining.jsx';

const Details = (props) => {
  const nonALTagsJsx = [];
  const locTagsJsx = [];
  const tagsJsx = [];

  const nonAdditionalNonLocationalTags = [
    ['Dining Style', props.restaurant.dining_style],
    ['Cuisines', props.restaurant.cuisine_types.join(', ')],
    ['Hours of Operation', props.restaurant.hours],
    ['Catering', props.restaurant.catering],
    ['Website', props.restaurant.website],
    ['Payment Methods', props.restaurant.payment_options],
    ['Dress Code', props.restaurant.dress_code],
    ['Executive Chef', props.restaurant.executive_chef],
    ['Private Dining', props.restaurant.private_dining === '0' ? 'NULL' : (<span className="private_dining_text">See Private Dining Options</span>)],
    ['Private Party Contact', props.restaurant.private_party_contact],
    ['Private Party Facilities', props.restaurant.private_party_fac],
    ['Special Events and Promotions', props.restaurant.promos],
  ];

  const fullAddress = [
    [props.restaurant.address_line_1],
    [props.restaurant.address_line_2],
    [props.restaurant.city],
    [props.restaurant.state],
    [props.restaurant.zip],
  ];

  const locationalTags = [
    ['Address', fullAddress],
    ['Cross Street', props.restaurant.cross_street],
    ['Parking Details', props.restaurant.parking_details],
    ['Neighborhood', (<span className="neighborhood_link" onClick={() => alert('Feature Not Available')}>{props.restaurant.neighborhood}</span>)],
  ];


  for (let i = 0; i < props.tags.length; i += 1) {
    tagsJsx.push((<span key={i} className={`additional_tag ${props.tags[i]}`}>{`${props.tags[i]}, `}</span>));
  }

  for (let i = 0; i < nonAdditionalNonLocationalTags.length; i += 1) {
    if (nonAdditionalNonLocationalTags[i][1] !== 'NULL') {
      nonALTagsJsx.push((
        <div>
          <Glyphicon tagName={nonAdditionalNonLocationalTags[i][0]} />
          <div className={`tag_name ${nonAdditionalNonLocationalTags[i][0].split(' ').join('_')}_name`}>{nonAdditionalNonLocationalTags[i][0]}</div>
          <div className={`tag_description ${nonAdditionalNonLocationalTags[i][0].split(' ').join('_')}_description`}>{nonAdditionalNonLocationalTags[i][1]}</div>
        </div>
      ));
    }
  }

  for (let i = 0; i < locationalTags.length; i += 1) {
    if (locationalTags[i][1] !== 'NULL') {
      locTagsJsx.push((
        <div>
          <Glyphicon tagName={locationalTags[i][0]} />
          <div className={`tag_name ${locationalTags[i][0].split(' ').join('_')}_name`}>{locationalTags[i][0]}</div>
          <div className={`tag_description ${locationalTags[i][0].split(' ').join('_')}_description`}>{locationalTags[i][1]}</div>
        </div>
      ));
    }
  }

  const detailsStyle = {
    overflow: props.showFullDetails ? 'auto' : 'hidden',
    boxShadow: 'inset 0 15px 0 0 10px 0 solid white',
    height: props.showFullDetails ? 'auto' : '200px',
  };

  return (
    <div style={detailsStyle} className="details">
      <div className="nonALTagsDiv">
          {nonALTagsJsx}
      </div>
      <div className="ALTags">
        <div className="Map">MAP GOES HERE</div>
        {locTagsJsx}
        <Glyphicon tagName="Additional Tags" />
        <div className="tag_name">Additional Tags</div>
        {tagsJsx}
      </div>
      <PrivateDining privateDiningText={props.restaurant.private_dining} />
    </div>
  );
};

export default Details;
