import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Glyphicon from './Glyphicon.jsx'; /* eslint-disable-line */
import PrivateDining from './PrivateDining.jsx'; /* eslint-disable-line */
import Summary from './Summary.jsx'; /* eslint-disable-line */
import TopTags from './components/TopTags.jsx'; /* eslint-disable-line */
import Description from './components/Description.jsx'; /* eslint-disable-line */
import Details from './components/Details.jsx'; /* eslint-disable-line */

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      currentRestaurantId: 30,
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
    console.log(restaurantId);
    $.get(`/api/restaurants/overview/${restaurantId.id}`, (data) => {
      const myObj = data;
      myObj.tags = data.tags.split(',');
      myObj.cuisine_types = data.cuisine_types.split(',');
      // for (let value of myObj) {
      //   if (value === 'NULL') {
      //     value = null;
      //   }
      // }
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

    const tagsJsx = [];
    const nonALTagsJsx = [];
    const locTagsJsx = [];

    // TODO: Make this its own component
    const nonAdditionalNonLocationalTags = [
      ['Dining Style', this.state.currentRestaurant.dining_style],
      ['Cuisines', this.state.currentRestaurant.cuisine_types.join(', ')],
      ['Hours of Operation', this.state.currentRestaurant.hours],
      ['Catering', this.state.currentRestaurant.catering],
      ['Website', this.state.currentRestaurant.website],
      ['Payment Methods', this.state.currentRestaurant.payment_options],
      ['Dress Code', this.state.currentRestaurant.dress_code],
      ['Executive Chef', this.state.currentRestaurant.executive_chef],
      ['Private Dining', this.state.currentRestaurant.private_dining === '0' ? 'NULL' : (<span className="private_dining_text">See Private Dining Options</span>)],
      ['Private Party Contact', this.state.currentRestaurant.private_party_contact],
      ['Private Party Facilities', this.state.currentRestaurant.private_party_fac],
      ['Special Events and Promotions', this.state.currentRestaurant.promos],
    ];

    // TODO: Make this its own component
    const fullAddress = [
      [this.state.currentRestaurant.address_line_1],
      [this.state.currentRestaurant.address_line_2],
      [this.state.currentRestaurant.city],
      [this.state.currentRestaurant.state],
      [this.state.currentRestaurant.zip],
    ];

    const geoCords = [
      this.state.currentRestaurant.longitude,
      this.state.currentRestaurant.latitude,
    ];

    const locationalTags = [
      ['Address', fullAddress],
      ['Cross Street', this.state.currentRestaurant.cross_street],
      ['Parking Details', this.state.currentRestaurant.parking_details],
      ['Neighborhood', (<span className="neighborhood_link" onClick={() => alert('Feature Not Available')}>{this.state.currentRestaurant.neighborhood}</span>)],
    ];

    for (let i = 0; i < this.state.currentRestaurant.tags.length; i += 1) {
      tagsJsx.push((<span key={i} className={`additional_tag ${this.state.currentRestaurant.tags[i]}`}>{`${this.state.currentRestaurant.tags[i]}, `}</span>));
    }

    for (let i = 0; i < nonAdditionalNonLocationalTags.length; i += 1) {
      if (nonAdditionalNonLocationalTags[i][1] !== 'NULL') {
        nonALTagsJsx.push((
          <div>
            <Glyphicon tagName={nonAdditionalNonLocationalTags[i][0]} />
            <div className={`tag_name ${nonAdditionalNonLocationalTags[i][0].split(' ').join('_')}_name`}>{nonAdditionalNonLocationalTags[i][0]}</div>
            <div className={`tag_description ${nonAdditionalNonLocationalTags[i][0].split(' ').join('_')}_description`}>{nonAdditionalNonLocationalTags[i][1]}</div>
          </div>
        ));
      }
    }

    for (let i = 0; i < locationalTags.length; i += 1) {
      if (locationalTags[i][1] !== 'NULL') {
        locTagsJsx.push((
          <div>
            <Glyphicon tagName={locationalTags[i][0]} />
            <div className={`tag_name ${locationalTags[i][0].split(' ').join('_')}_name`}>{locationalTags[i][0]}</div>
            <div className={`tag_description ${locationalTags[i][0].split(' ').join('_')}_description`}>{locationalTags[i][1]}</div>
          </div>
        ));
      }
    }

    const detailsStyle = {
      overflow: this.state.showFullDetails ? 'auto' : 'hidden',
      boxShadow: 'inset 0 15px 0 0 10px 0 solid white',
      height: this.state.showFullDetails ? 'auto' : '200px',
    };

    return (
      <div>
        <h1>{this.state.currentRestaurant.name}</h1>
        <Summary
          review_average={this.state.currentRestaurant.review_average}
          review_count={this.state.currentRestaurant.review_count}
          cuisine_types={this.state.currentRestaurant.cuisine_types}
          price_range={this.state.currentRestaurant.price_range}
        />
        <TopTags tags={this.state.currentRestaurant.tags} />
        <Description
          showFullDescriptionState={this.state.showFullDescription}
          description={this.state.currentRestaurant.description}
          showFullDescription={this.showFullDescription}
        />
        <Details
          restaurant={this.state.currentRestaurant}
        />
        <div style={detailsStyle} className="details">
          <div className="nonALTagsDiv">
            {nonALTagsJsx}
          </div>
          <div className="ALTags">
            <div className="Map">MAP GOES HERE</div>
            {locTagsJsx}
            <Glyphicon tagName="Additional Tags" />
            <div className="tag_name">Additional Tags</div>
            {tagsJsx}
          </div>
          <PrivateDining privateDiningText={this.state.currentRestaurant.private_dining} />
        </div>
        <button type="button" onClick={this.showFullDetails} className="See All Details Button">{this.state.showFullDetails ? 'Show Less' : 'Show More Details'}</button>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </div>
    );
  }
}

ReactDOM.render(<Overview />, document.getElementById('app')); // eslint-disable-line no-undef
