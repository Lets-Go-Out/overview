import React from 'react';
import Glyphicon from './Glyphicon.jsx';
import PrivateDining from './PrivateDining.jsx';
import LocTags from './LocTags.jsx';
import NonALTags from './NonALTags.jsx';

const Details = (props) => {
  const nonALTagsJsx = [];
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
    ['Private Party Contact', props.restaurant.private_party_contact],
    ['Private Party Facilities', props.restaurant.private_party_fac],
    ['Special Events and Promotions', props.restaurant.promos],
  ];



  for (let i = 0; i < props.restaurant.tags.length; i += 1) {
    tagsJsx.push((<span key={i} className={`additional_tag ${props.restaurant.tags[i]}`}>{`${props.restaurant.tags[i]}, `}</span>));
  }

  const detailsWellStyle = {
    overflow: props.showFullDetailsState ? 'visible' : 'hidden',
    boxShadow: 'inset 0 15px 0 0 10px 0 solid white',
    height: props.showFullDetailsState ? 'auto' : '300px',
    marginLeft: '0',
    marginRight: '0',
  };

  return (
    <div className="row col-md-10 col-md-offset-1">
    <div style={detailsWellStyle} className="well well-lg details_well">
      <div className="details row">
        <NonALTags restaurant={props.restaurant} />
        <div className="ALTags col-md-6">
          <div className="row">
            <div className="thumbnail">
              <img src="../../images/stock_map.png" alt="Stock Map" />
              <div className="caption">
                <h4>MAP GOES HERE</h4>
                <p>This feature is not yet included</p>
              </div>
            </div>
          </div>
          <div className="row">
            <LocTags restaurant={props.restaurant} />
            <div className="media">
              <div className="media-left">
                <Glyphicon tagName="Additional Tags" />
              </div>
              <div className="media-body">
                <h4 className="tag_name media-heading">Additional Tags</h4>
                <p>
                  {tagsJsx}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrivateDining privateDiningText={props.restaurant.private_dining} />
    </div>
    </div>
  );
};

export default Details;
