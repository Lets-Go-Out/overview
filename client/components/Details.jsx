import React from 'react';
import {
  Row, Col, Well, Thumbnail, Media,
} from 'react-bootstrap/lib';
import 'bootstrap/dist/css/bootstrap.css';
import getGlyph from './getGlyph.jsx';
import PrivateDining from './PrivateDining.jsx';
import LocTags from './LocTags.jsx';
import NonALTags from './NonALTags.jsx';
import styles from '../styles/overview_styles.css';

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
    <Row>
      <Col md={10} mdOffset={1}>
        <Well
          bsSize="lg"
          style={detailsWellStyle}
          styleName="styles.details_well"
        >
          <Row>
            <NonALTags restaurant={props.restaurant} />
            <Col styleName="styles.ALTags" md={6}>
              <Row>
                <Thumbnail src="stock_map.png" alt="Stock Map">
                  <h4>MAP GOES HERE</h4>
                  <p>This feature is not yet included</p>
                </Thumbnail>
              </Row>
              <Row>
                <LocTags restaurant={props.restaurant} />
                <Media>
                  <Media.Left>
                    {getGlyph('Additional Tags')}
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading styleName="styles.tag_name">Additional Tags</Media.Heading>
                    <p>
                      {tagsJsx}
                    </p>
                  </Media.Body>
                </Media>
              </Row>
            </Col>
          </Row>
          <PrivateDining privateDiningText={props.restaurant.private_dining} />
        </Well>
      </Col>
    </Row>
  );
};

export default Details;
