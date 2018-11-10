import React from 'react';
import $ from 'jquery';
import bs from 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/overview_styles.css';

const getGlyph = (glyphName) => {
  const glyphStyle = {
    fontSize: '20px',
  };
  switch (glyphName) {
    case 'Catering':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-bell" aria-label="Catering Bell Icon" />);
    case 'Cuisines':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-cutlery" aria-label="Cusine Types Cutlery Icon" />);
    case 'Cuisine Type':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-cutlery" aria-label="Cusine Types Cutlery Icon" />);
    case 'Dining Style':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-apple" aria-label="Dining Style Apple Icon" />);
    case 'Dress Code':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-sunglasses" aria-label="Dress Code Sunglasses Icon" />);
    case 'Executive Chef':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-user" aria-label="Executive Chef Anonymous User Icon" />);
    case 'Hours of Operation':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-time" aria-label="Hours of Operation Clock Face Icon" />);
    case 'Phone Number':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-earphone" aria-label="Phone Number Earphone Icon" />);
    case 'Website':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-link" aria-label="Website Link Icon" />);
    case 'Payment Methods':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-credit-card" aria-label="Payment Methods Credit Card Icon" />);
    case 'Private Dining':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-glass" aria-label="Private Dining Wine Glass Icon" />);
    case 'Private Party Contact':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-phone-alt" aria-label="Private Party Contact Old Phone Icon" />);
    case 'Private Party Facilities':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-cd" aria-label="Private Party Facilities CD Icon" />);
    case 'Public Transit':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-transfer" aria-label="Public-Transit Tranfer Arrows Icon" />);
    case 'Special Events and Promotions':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-certificate" aria-label="Special Events and Promotins Certificate Icon" />);
    case 'Additional Tags':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-tags" aria-label="Addtional Tags Tag Icon" />);
    case 'Review Count':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-comment" aria-label="Review Count Talk-bubble Icon" />);
    case 'Address':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-home" aria-label="Address House Icon" />);
    case 'Neighborhood':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-tree-deciduous" aria-label="Neighborhood Deciduous Tree Icon" />);
    case 'Cross Street':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-road" aria-label="Cross Roads Road Icon" />);
    case 'Parking Details':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-object-align-left" aria-label="Parking Details Bird's-Eye-View of Parked Cars Icon" />);
    case 'Price Range':
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-usd" aria-label="Price Range USD Icon" />);
    default:
      console.error('Invalid Tag Name'); /* eslint-disable-line no-console */
      return (<span style={glyphStyle} styleName="bs.glyphicon bs.glyphicon-alert" aria-label="Error Alert Icon" />);
  }
};

export default getGlyph;
