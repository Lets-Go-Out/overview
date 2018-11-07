import React from 'react';
import {
  Glyphicon,
} from 'react-bootstrap/lib';
import styles from '../styles/overview_styles.css';

const getGlyph = (glyphName) => {
  const glyphStyle = {
    fontSize: '20px',
  };
  console.log('getGlyph got ', glyphName);
  switch (glyphName) {
    case 'Catering':
      return (<Glyphicon style={glyphStyle} glyph="bell" aria-label="Catering Bell Icon" />);
    case 'Cuisines':
      return (<Glyphicon style={glyphStyle} glyph="cutlery" aria-label="Cusine Types Cutlery Icon" />);
    case 'Cuisine Type':
      return (<Glyphicon style={glyphStyle} glyph="cutlery" aria-label="Cusine Types Cutlery Icon" />);
    case 'Dining Style':
      return (<Glyphicon style={glyphStyle} glyph="apple" aria-label="Dining Style Apple Icon" />);
    case 'Dress Code':
      return (<Glyphicon style={glyphStyle} glyph="sunglasses" aria-label="Dress Code Sunglasses Icon" />);
    case 'Executive Chef':
      return (<Glyphicon style={glyphStyle} glyph="user" aria-label="Executive Chef Anonymous User Icon" />);
    case 'Hours of Operation':
      return (<Glyphicon style={glyphStyle} glyph="time" aria-label="Hours of Operation Clock Face Icon" />);
    case 'Phone Number':
      return (<Glyphicon style={glyphStyle} glyph="earphone" aria-label="Phone Number Earphone Icon" />);
    case 'Website':
      return (<Glyphicon style={glyphStyle} glyph="link" aria-label="Website Link Icon" />);
    case 'Payment Methods':
      return (<Glyphicon style={glyphStyle} glyph="credit-card" aria-label="Payment Methods Credit Card Icon" />);
    case 'Private Dining':
      return (<Glyphicon style={glyphStyle} glyph="glass" aria-label="Private Dining Wine Glass Icon" />);
    case 'Private Party Contact':
      return (<Glyphicon style={glyphStyle} glyph="phone-alt" aria-label="Private Party Contact Old Phone Icon" />);
    case 'Private Party Facilities':
      return (<Glyphicon style={glyphStyle} glyph="cd" aria-label="Private Party Facilities CD Icon" />);
    case 'Public Transit':
      return (<Glyphicon style={glyphStyle} glyph="transfer" aria-label="Public-Transit Tranfer Arrows Icon" />);
    case 'Special Events and Promotions':
      return (<Glyphicon style={glyphStyle} glyph="certificate" aria-label="Special Events and Promotins Certificate Icon" />);
    case 'Additional Tags':
      return (<Glyphicon style={glyphStyle} glyph="tags" aria-label="Addtional Tags Tag Icon" />);
    case 'Review Count':
      return (<Glyphicon style={glyphStyle} glyph="comment" aria-label="Review Count Talk-bubble Icon" />);
    case 'Address':
      return (<Glyphicon style={glyphStyle} glyph="home" aria-label="Address House Icon" />);
    case 'Neighborhood':
      return (<Glyphicon style={glyphStyle} glyph="tree-deciduous" aria-label="Neighborhood Deciduous Tree Icon" />);
    case 'Cross Street':
      return (<Glyphicon style={glyphStyle} glyph="road" aria-label="Cross Roads Road Icon" />);
    case 'Parking Details':
      return (<Glyphicon style={glyphStyle} glyph="object-align-left" aria-label="Parking Details Bird's-Eye-View of Parked Cars Icon" />);
    case 'Price Range':
      return (<Glyphicon style={glyphStyle} glyph="usd" aria-label="Price Range USD Icon" />);
    default:
      console.error('Invalid Tag Name'); /* eslint-disable-line no-console */
      return (<Glyphicon style={glyphStyle} glyph="alert" aria-label="Error Alert Icon" />);
  }
};

export default getGlyph;
