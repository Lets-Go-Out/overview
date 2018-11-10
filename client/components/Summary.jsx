import React from 'react';
import $ from 'jquery';
import bs from 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/overview_styles.css';
import MiniSummary from './MiniSummary.jsx'; /* eslint-disable-line */
import getGlyph from './getGlyph.jsx'; /* eslint-disable-line */

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewModuleComponent: [],
    };
    this.getReviewComponent = this.getReviewComponent.bind(this);
  }

  getReviewComponent() {
    $.get(`http://droptableoverviewmodule-env.p3mzbj3zib.us-west-1.elasticbeanstalk.com/restaurants/${this.props.restaurantId}/reviewModuleComponent`, (jsx) => {
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
      <div styleName="bs.row">
        <div styleName="bs.col-sm-10 bs.col-xs-offset-2 bs.col-sm-offset-2">
          <div styleName="bs.col-md-4 bs.col-sm-5  bs.col-sm-offset-0">
            <MiniSummary id={this.props.restaurantId} />
          </div>
          <div styleName="styles.price_range bs.col-md-3 bs.col-sm-4">
            {getGlyph('Price Range')}
            {priceRange}
          </div>
          <div styleName="styles.cuisine_type bs.col-sm-3 ">
            {getGlyph('Cuisine Type')}
            {` ${this.props.cuisine_types[0]} `}
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
