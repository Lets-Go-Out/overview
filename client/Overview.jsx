import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Summary from './components/Summary.jsx'; /* eslint-disable-line */
import TopTags from './components/TopTags.jsx'; /* eslint-disable-line */
import Description from './components/Description.jsx'; /* eslint-disable-line */
import Details from './components/Details.jsx'; /* eslint-disable-line */

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      currentRestaurantId: 100,
      currentRestaurant: {},
      showFullDescription: false,
      showFullDetails: false,
    };
    this.showFullDescription = this.showFullDescription.bind(this);
    this.showFullDetails = this.showFullDetails.bind(this);
  }

  componentDidMount() {
    this.getRestaurantById();
  }

  getRestaurantById() {
    const restaurantId = { id: this.state.currentRestaurantId };
    $.get(`/api/restaurants/overview/${restaurantId.id}`, (data) => {
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
      <div className="container">
        <div className="row">
          <h1 className="page-header col-md-10 col-md-offset-1">{this.state.currentRestaurant.name}</h1>
        </div>
        <div className="row">
          <Summary
            review_average={this.state.currentRestaurant.review_average}
            review_count={this.state.currentRestaurant.review_count}
            cuisine_types={this.state.currentRestaurant.cuisine_types}
            price_range={this.state.currentRestaurant.price_range}
          />
        </div>
        <div className="row">
          <TopTags
            tags={this.state.currentRestaurant.tags}
            />
        </div>
        <div className="row">
          <Description
            showFullDescriptionState={this.state.showFullDescription}
            description={this.state.currentRestaurant.description}
            showFullDescription={this.showFullDescription}
          />
        </div>
        <Details
          restaurant={this.state.currentRestaurant}
          showFullDetailsState={this.state.showFullDetails}
        />
        <button
          className="btn btn-warning btn-lg col-md-3 col-md-offset-1 row"
          type="button"
          onClick={this.showFullDetails}
        >
          {
            this.state.showFullDetails
              ? 'Show Less'
              : 'Show More Details'
          }
        </button>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous" />
      </div>
    );
  }
}

export default Overview;
