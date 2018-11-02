import React from 'react';

const Glyphicon = (props) => {
  switch (props.tagName) {
    case 'Catering':
      return (<span className="glyphicon glyphicon-bell" aria-hidden="true" aria-label="Catering Bell Icon" />);
    case 'Cuisines':
      return (<span className="glyphicon glyphicon-cutlery" aria-hidden="true" aria-label="Cusine Types Cutlery Icon" />);
    case 'Dining Style':
      return (<span className="glyphicon glyphicon-apple" aria-hidden="true" aria-label="Dining Style Apple Icon" />);
    case 'Dress Code':
      return (<span className="glyphicon glyphicon-sunglasses" aria-hidden="true" aria-label="Dress Code Sunglasses Icon" />);
    case 'Executive Chef':
      return (<span className="glyphicon glyphicon-user" aria-hidden="true" aria-label="Executive Chef Anonymous User Icon" />);
    case 'Hours of Operation':
      return (<span className="glyphicon glyphicon-time" aria-hidden="true" aria-label="Hours of Operation Clock Face Icon" />);
    case 'Phone Number':
      return (<span className="glyphicon glyphicon-earphone" aria-hidden="true" aria-label="Phone Number Earphone Icon" />);
    case 'Website':
      return (<span className="glyphicon glyphicon-link" aria-hidden="true" aria-label="Website Link Icon" />);
    case 'Payment Methods':
      return (<span className="glyphicon glyphicon-credit-card" aria-hidden="true" aria-label="Payment Methods Credit Card Icon" />);
    case 'Private Dining':
      return (<span className="glyphicon glyphicon-glass" aria-hidden="true" aria-label="Private Dining Wine Glass Icon" />);
    case 'Private Party Contact':
      return (<span className="glyphicon glyphicon-phone-alt" aria-hidden="true" aria-label="Private Party Contact Old Phone Icon" />);
    case 'Private Party Facilities':
      return (<span className="glyphicon glyphicon-cd" aria-hidden="true" aria-label="Private Party Facilities CD Icon" />);
    case 'Special Events and Promotions':
      return (<span className="glyphicon glyphicon-certificate" aria-hidden="true" aria-label="Special Events and Promotins Certificate Icon" />);
    case 'Additional Tags':
      return (<span className="glyphicon glyphicon-tags" aria-hidden="true" aria-label="Addtional Tags Tag Icon" />);
    case 'Review Count':
      return (<span className="glyphicon glyphicon-comment" aria-hidden="true" aria-label="Review Count Talk-bubble Icon" />);
    case 'Address':
      return (<span className="glyphicon glyphicon-home" aria-hidden="true" aria-label="Address House Icon" />);
    case 'Neighborhood':
      return (<span className="glyphicon glyphicon-tree-deciduous" aria-hidden="true" aria-label="Neighborhood Deciduous Tree Icon" />);
    case 'Cross Street':
      return (<span className="glyphicon glyphicon-road" aria-hidden="true" aria-label="Cross Roads Road Icon" />);
    case 'Parking Details':
      return (<span className="glyphicon glyphicon-object-align-left" aria-hidden="true" aria-label="Parking Details Bird's-Eye-View of Parked Cars Icon" />);
    default:
      console.error('Invalid Tag Name'); /* eslint-disable-line no-console */
      return (<span className="glyphicon glyphicon-alert" aria-hidden="true" aria-label="Error Alert Icon" />);
  }
};

export default Glyphicon;
