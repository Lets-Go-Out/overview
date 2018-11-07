/*eslint-env browser*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/MiniSummary.css';

const reviewsURL = 'http://localhost:3005';

const Stars = ({ num }) => {
  const numStars = Math.round(num * 4) / 4;
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    if (i <= numStars) {
      stars.push(<div className={`${styles.fullStar} ${styles.star}`} />);
    } else if (i - numStars === 0.25) {
      stars.push(<div className={`${styles.threeQuarterStar} ${styles.star}`} />);
    } else if (i - numStars === 0.5) {
      stars.push(<div className={`${styles.halfStar} ${styles.star}`} />);
    } else if (i - numStars === 0.75) {
      stars.push(<div className={`${styles.quarterStar} ${styles.star}`} />);
    } else {
      stars.push(<div className={`${styles.emptyStar} ${styles.star}`} />);
    }
  }
  return (
    <div className={styles.stars}>
      {stars}
    </div>);
};

Stars.defaultProps = {
  num: 0,
};

Stars.propTypes = {
  num: PropTypes.number,
};

class MiniSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallAvg: 0,
      numReviews: 0,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    fetch(`${reviewsURL}/restaurants/${id}/reviewSummary`)
      .then(data => data.json())
      .then((data) => {
        const { overallAvg, numReviews } = data;
        this.setState({ overallAvg, numReviews });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { overallAvg, numReviews } = this.state;
    return (
      <div className={styles.miniSummary}>
        <Stars num={overallAvg} />
        <div>
          <span>
            {`${numReviews} reviews`}
          </span>
        </div>
      </div>
    );
  }
}

MiniSummary.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MiniSummary;
