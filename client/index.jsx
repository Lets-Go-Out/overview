import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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
    this.showFullDescription = this.showFullDescription.bind(this);
  }

  showFullDescription() {
    this.setState({ showFullDescription: !this.state.showFullDescription });
  }

  render() {
    const numOfStarHalves = this.state.currentRestaurant.review_average / 5;
    let stars = '';
    let tagsJsx = [];
    let topTagsJsx = [];
    const nonAdditionalNonLocationalTags = [
      this.state.currentRestaurant.catering,
      this.state.currentRestaurant.cuisine_types,
      this.state.currentRestaurant.dress_code,
      this.state.currentRestaurant.executive_chef,
      this.state.currentRestaurant.hours,
      this.state.currentRestaurant.payment_options,
      this.state.currentRestaurant.private_dining,
      this.state.currentRestaurant.private_party_contact,
      this.state.currentRestaurant.private_party_fac,
      this.state.currentRestaurant.promos,
    ];
    const locationalTags = [
      this.state.currentRestaurant.latitude,
      this.state.currentRestaurant.longitude,
      this.state.currentRestaurant.address_line_1,
      this.state.currentRestaurant.address_line_2,
      this.state.currentRestaurant.city,
      this.state.currentRestaurant.state,
      this.state.currentRestaurant.zip,
      this.state.currentRestaurant.cross_street,
      this.state.currentRestaurant.neighborhood,
      ];

    for (let i = 0; i < numOfStarHalves; i += 1) {
      stars += '*';
    }

    if (!this.state.currentRestaurant.id) {
      return (<h1>Loading...</h1>);
    }

    // remove commas when these become little cards
    topTagsJsx.push((<span key={0} className={`top_tag ${this.state.currentRestaurant.tags[0]}`}>{` ${this.state.currentRestaurant.tags[0]}`}</span>));
    for (let i = 1; i < 3 && i < this.state.currentRestaurant.tags.length; i += 1) {
      topTagsJsx.push((<span key={i} className={`top_tag ${this.state.currentRestaurant.tags[i]}`}>{`, ${this.state.currentRestaurant.tags[i]}`}</span>));
    }

    for (let i = 0; i < this.state.currentRestaurant.tags.length; i += 1) {
      if(this.state.currentRestaurant.tags[i])
      tagsJsx.push((<div key={i} className={`top_tag ${this.state.currentRestaurant.tags[i]}`}>{`${this.state.currentRestaurant.tags[i]}`}</div>));
    }
    const truncatedDescription = this.state.currentRestaurant.description.slice(0, 180);

    return (
      <div>
        <h1>{this.state.currentRestaurant.name}</h1>
        <div className="summaryDiv">
          <span className="review_average">
            <span className="review_average_stars">{`${stars} `}</span>
            <span className="review_average_number">
              {`${this.state.currentRestaurant.review_average} `}
            </span>
          </span>
          <span className="review_count">
            <i className="review_count_glyph">____</i>
            {` ${this.state.currentRestaurant.review_count} `}
          </span>
          <span className="price_range">{`${this.state.currentRestaurant.price_range} `}</span>
          <span className="cuisine_types">
            <i className="cuisine_types_glyph"> ____ </i>
            {`${this.state.currentRestaurant.cuisine_types[0]} `}
          </span>
        </div>
        <div className="top_tags">
          <span>Top Tags:</span>
          {topTagsJsx}
        </div>
        <div className="description">
          <p className="description_paragraph">
            {this.state.showFullDescription ? this.state.currentRestaurant.description : `${truncatedDescription}`}
            <span display={this.state.showFullDescription ? 'none' : 'flex'} className="description_read_more" onClick={this.showFullDescription}>{` + ${this.state.showFullDescription ? 'Show Less' : 'Read More'}`}</span>
          </p>
        </div>
        <div className="details">
          {tagsJsx}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Overview />, document.getElementById('app')); // eslint-disable-line no-undef
