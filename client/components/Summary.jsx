import React from 'react';
import $ from 'jquery';
import {
  Row, Col, Glyphicon,
} from 'react-bootstrap';
import getGlyph from './getGlyph.jsx'; /* eslint-disable-line */
import MiniSummary from './MiniSummary.jsx';
import styles from '../styles/overview_styles.css';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewModuleComponent: [],
    };
    this.getReviewComponent = this.getReviewComponent.bind(this);
  }

  getReviewComponent() {
    $.get('/restaurants/:restaurantid/reviewModuleComponent', (jsx) => {
      this.setState({ reviewModuleComponent: jsx });
    });
  }

  render() {
    let priceRange;
    switch (this.props.price_range) {
      case '$':
        priceRange = ' 30 and under ';
        break;
      case '$$':
        priceRange = ' 30 and under ';
        break;
      case '$$$':
        priceRange = ' 31 to 50 ';
        break;
      case '$$$$':
        priceRange = ' 50 and over ';
        break;
      case '$$$$$':
        priceRange = ' 50 and over ';
        break;
      default:
        priceRange = ' Oops! Something went wrong...';
        break;
    }
    return (
      <Row>
        <Col md={10} mdOffset={1}>
          <Col md={4} sm={3}>
            <MiniSummary id={this.props.restaurantId}/>
          </Col>
          <Col styleName="styles.price_range" md={3} sm={4}>
            {getGlyph('Price Range')}
            {priceRange}
          </Col>
          <Col styleName="styles.cuisine_type" md={3} sm={8}>
            {getGlyph('Cuisine Type')}
            {` ${this.props.cuisine_types[0]} `}
          </Col>
        </Col>
      </Row>
    );
  }
}

export default Summary;
