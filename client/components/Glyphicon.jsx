import React from 'react';

const Glyphicon = (props) => {
  const glyphStyle = {
    fontSize: '26px',
  };

  switch (props.tagName) {
    case 'Catering':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-bell" aria-hidden="true" aria-label="Catering Bell Icon" />);
    case 'Cuisines':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-cutlery" aria-hidden="true" aria-label="Cusine Types Cutlery Icon" />);
    case 'Cuisine Type':
      return (<span style={glyphStyle} className="glyphicon glyphicon-cutlery" aria-hidden="true" aria-label="Cusine Types Cutlery Icon" />);
    case 'Dining Style':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-apple" aria-hidden="true" aria-label="Dining Style Apple Icon" />);
    case 'Dress Code':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-sunglasses" aria-hidden="true" aria-label="Dress Code Sunglasses Icon" />);
    case 'Executive Chef':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-user" aria-hidden="true" aria-label="Executive Chef Anonymous User Icon" />);
    case 'Hours of Operation':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-time" aria-hidden="true" aria-label="Hours of Operation Clock Face Icon" />);
    case 'Phone Number':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-earphone" aria-hidden="true" aria-label="Phone Number Earphone Icon" />);
    case 'Website':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-link" aria-hidden="true" aria-label="Website Link Icon" />);
    case 'Payment Methods':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-credit-card" aria-hidden="true" aria-label="Payment Methods Credit Card Icon" />);
    case 'Private Dining':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-glass" aria-hidden="true" aria-label="Private Dining Wine Glass Icon" />);
    case 'Private Party Contact':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-phone-alt" aria-hidden="true" aria-label="Private Party Contact Old Phone Icon" />);
    case 'Private Party Facilities':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-cd" aria-hidden="true" aria-label="Private Party Facilities CD Icon" />);
    case 'Public Transit':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-transfer" aria-hidden="true" aria-label="Public-Transit Tranfer Arrows Icon" />);
    case 'Special Events and Promotions':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-certificate" aria-hidden="true" aria-label="Special Events and Promotins Certificate Icon" />);
    case 'Additional Tags':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-tags" aria-hidden="true" aria-label="Addtional Tags Tag Icon" />);
    case 'Review Count':
      return (<span style={glyphStyle} className="glyphicon glyphicon-comment" aria-hidden="true" aria-label="Review Count Talk-bubble Icon" />);
    case 'Address':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-home" aria-hidden="true" aria-label="Address House Icon" />);
    case 'Neighborhood':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-tree-deciduous" aria-hidden="true" aria-label="Neighborhood Deciduous Tree Icon" />);
    case 'Cross Street':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-road" aria-hidden="true" aria-label="Cross Roads Road Icon" />);
    case 'Parking Details':
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-object-align-left" aria-hidden="true" aria-label="Parking Details Bird's-Eye-View of Parked Cars Icon" />);
    case 'Price Range':
      return (<span style={glyphStyle} className="glyphicon glyphicon-usd" aria-hidden="true" aria-label="Price Range USD Icon" />);
    default:
      console.error('Invalid Tag Name'); /* eslint-disable-line no-console */
      return (<span style={glyphStyle} className="media-object glyphicon glyphicon-alert" aria-hidden="true" aria-label="Error Alert Icon" />);
  }
};

export default Glyphicon;
