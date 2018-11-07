import React from 'react';
import $ from 'jquery';
import {
  Grid, Row, Col, PageHeader, Button,
} from 'react-bootstrap';
import Summary from './Summary.jsx'; /* eslint-disable-line */
import TopTags from './TopTags.jsx'; /* eslint-disable-line */
import Description from './Description.jsx'; /* eslint-disable-line */
import Details from './Details.jsx'; /* eslint-disable-line */
import styles from '../styles/overview_styles.css';

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
    this.getRestaurantById(this.state.currentRestaurantId);
  }

  getRestaurantById(restaurantId) {
    const restaurantIdObj = { id: restaurantId };
    $.get(`http://localhost:3002/api/restaurants/overview/${restaurantIdObj.id}`, (data) => {
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
      <Grid>
        <Row>
          <Col md={10} mdOffset={1}>
            <PageHeader>{this.state.currentRestaurant.name}</PageHeader>
          </Col>
        </Row>
        <Row>
          <Summary
            restaurantId={this.state.currentRestaurant.restaurantId}
            cuisine_types={this.state.currentRestaurant.cuisine_types}
            price_range={this.state.currentRestaurant.price_range}
          />
        </Row>
        <Row>
          <TopTags
            tags={this.state.currentRestaurant.tags}
          />
        </Row>
        <Row>
          <Description
            showFullDescriptionState={this.state.showFullDescription}
            description={this.state.currentRestaurant.description}
            showFullDescription={this.showFullDescription}
          />
        </Row>
        <Row>
          <Details
            restaurant={this.state.currentRestaurant}
            showFullDetailsState={this.state.showFullDetails}
          />
        </Row>
        <Row>
          <Col md={3} mdOffset={1}>
            <Button
              styleName="styles.view_all_details"
              bsSize="large"
              type="button"
              onClick={this.showFullDetails}
            >
              {
                this.state.showFullDetails
                  ? 'Hide details'
                  : 'View all details'
              }
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Overview;
