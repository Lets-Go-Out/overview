import React from 'react';
import $ from 'jquery';
import Summary from './Summary.jsx'; /* eslint-disable-line */
import TopTags from './TopTags.jsx'; /* eslint-disable-line */
import Description from './Description.jsx'; /* eslint-disable-line */
import Details from './Details.jsx'; /* eslint-disable-line */
import bs from 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/overview_styles.css';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      currentRestaurantId: 20,
      currentRestaurant: {},
      showFullDescription: false,
      showFullDetails: false,
    };
    this.showFullDescription = this.showFullDescription.bind(this);
    this.showFullDetails = this.showFullDetails.bind(this);
  }

  componentDidMount() {
    this.getRestaurantById(this.state.currentRestaurantId);
  }

  getRestaurantById(restaurantId) {
    const restaurantIdObj = { id: restaurantId };
    $.get(`http://droptableoverviewmodule-env.p3mzbj3zib.us-west-1.elasticbeanstalk.com/api/restaurants/overview/${restaurantIdObj.id}`, (data) => {
      const myObj = data;
      myObj.tags = data.tags.split(',');
      myObj.cuisine_types = data.cuisine_types.split(',');
      this.setState({ currentRestaurant: myObj });
    });
  }

  showFullDescription() {
    this.setState({ showFullDescription: !this.state.showFullDescription });
  }

  showFullDetails() {
    this.setState({ showFullDetails: !this.state.showFullDetails });
  }

  render() {
    if (!this.state.currentRestaurant.id) {
      return (<h1>Loading...</h1>);
    }

    // const geoCords = [
    //   this.state.currentRestaurant.longitude,
    //   this.state.currentRestaurant.latitude,
    // ];

    return (
      <div styleName="bs.container styles.overview_grid">
        <div styleName="bs.row">
          <div styleName="bs.col-md-10 bs.col-md-offset-1">
            <div styleName="styles.overview_header bs.page-header">{this.state.currentRestaurant.name}</div>
          </div>
        </div>
        <div styleName="bs.row">
          <Summary
            restaurantId={this.state.currentRestaurant.id}
            cuisine_types={this.state.currentRestaurant.cuisine_types}
            price_range={this.state.currentRestaurant.price_range}
          />
        </div>
        <div styleName="bs.row">
          <TopTags
            tags={this.state.currentRestaurant.tags}
          />
        </div>
        <div styleName="bs.row">
          <Description
            showFullDescriptionState={this.state.showFullDescription}
            description={this.state.currentRestaurant.description}
            showFullDescription={this.showFullDescription}
          />
        </div>
        <div styleName="bs.row">
          <Details
            restaurant={this.state.currentRestaurant}
            showFullDetailsState={this.state.showFullDetails}
          />
        </div>
        <div styleName="bs.row">
          <div styleName="bs.col-md-3 bs.col-md-offset-1">
            <a
              role="button"
              styleName="styles.view_all_details bs.btn bs.btn-lg"
              type="button"
              onClick={this.showFullDetails}
            >
              {
                this.state.showFullDetails
                  ? 'Hide details'
                  : 'View all details'
              }
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
