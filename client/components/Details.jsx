import React from 'react';
import $ from 'jquery';
import bs from 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/overview_styles.css';
import getGlyph from './getGlyph.jsx';
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
    tagsJsx.push((<span key={i} styleName="styles.additional_tag">{`${props.restaurant.tags[i]}, `}</span>));
  }

  const detailsWellStyle = {
    overflow: props.showFullDetailsState ? 'visible' : 'hidden',
    boxShadow: 'inset 0 15px 0 0 10px 0 solid white',
    height: props.showFullDetailsState ? 'auto' : '300px',
    marginLeft: '0',
    marginRight: '0',
  };

  return (
    <div stylename="bs.col-md-10 bs.col-md-offset-1">
      <div
        style={detailsWellStyle}
        styleName="styles.details_well bs.well bs.well-lg"
      >
        <div styleName="bs.row">
          <NonALTags restaurant={props.restaurant} />
          <div styleName="styles.ALTags bs.col-md-6">
            <div styleName="bs.row">
              <div stylName="bs.thumbnail">
                <img src="stock_map.png" alt="Stock Map" />
                <div styleName="bs.caption">
                  <h4>MAP GOES HERE</h4>
                  <p>This feature is not yet included</p>
                </div>
              </div>
            </div>
            <div styleName="bs.row">
              <LocTags restaurant={props.restaurant} />
              <div styleName="bs.media">
                <div styleName="bs.media-left">
                  {getGlyph('Additional Tags')}
                </div>
                <div styleName="bs.media-body">
                  <div styleName="styles.tag_name bs.media-heading">Additional Tags</div>
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
