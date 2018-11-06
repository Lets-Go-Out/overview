import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Overview from '../client/Overview.jsx'; /*  eslint-disable-line  */
import Description from '../client/components/Description.jsx'; /*  eslint-disable-line  */
import Details from '../client/components/Details.jsx'; /*  eslint-disable-line  */
import Glyphicon from '../client/components/Glyphicon.jsx'; /*  eslint-disable-line  */
import LocTags from '../client/components/LocTags.jsx'; /*  eslint-disable-line  */
import NonALTags from '../client/components/NonALTags.jsx'; /*  eslint-disable-line  */
import PrivateDining from '../client/components/PrivateDining.jsx'; /*  eslint-disable-line  */
import Summary from '../client/components/Summary.jsx'; /*  eslint-disable-line  */
import TopTags from '../client/components/TopTags.jsx'; /*  eslint-disable-line  */
import dummyData from '../database/dummyData.json';

Enzyme.configure({ adapter: new Adapter() });

describe('Overview Component', () => {
  test('renders', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.exists()).toBe(true);
  });
  test('showFullDescription method switches the showFullDescription state from false to true, and true to false', () => {
    const wrapper = shallow(<Overview />);
    const instance = wrapper.instance();
    instance.showFullDescription();
    expect(instance.state.showFullDescription).toEqual(true);
    instance.showFullDescription();
    expect(instance.state.showFullDescription).toEqual(false);
  });
  test('.getRestaurantById sets the state\'s currentRestaurant property to a restaurant from the database by ID', () => {
    const wrapper = shallow(<Overview />);
    const instance = wrapper.instance();
    const myTestRestaurants = dummyData;
    for (let i = 0; i < myTestRestaurants.length; i += 1) {
      // myTestRestaurants[i].tags = myTestRestaurants[i].tags.split(',');
      // myTestRestaurants[i].cuisine_types = myTestRestaurants[i].cuisine_types.split(',');
      instance.getRestaurantById(i);
      setTimeout(() => expect(instance.state.currentRestaurant).toEqual(myTestRestaurants[i]), 0);
    }
  });
});

describe('Description Component', () => {
  test('renders', () => {
    let myObj = dummyData;
    for (let i = 0; i < myObj.length; i += 1) {
      const wrapper = shallow(<Description description={myObj[i].description} />);
      expect(wrapper.exists()).toBe(true);
    }
  });
});

describe('Details Component', () => {
  test('renders for every datapoint in the database', () => {
    let myObj = dummyData;
    let wrapper;
    for (let i = 0; i < myObj.length; i += 1) {
      myObj[i].cuisine_types = myObj[i].cuisine_types.split(',');
      wrapper = shallow(<Details restaurant={myObj[i]} />);
      expect(wrapper.exists()).toBe(true);
    }
  });
});

describe('PrivateDining Component', () => {
  test('renders when given no props', () => {
    const wrapper = shallow(<PrivateDining />);

    expect(wrapper.exists()).toBe(true);
  });
  test('renders nothing when given "NULL" as input', () => {
    const wrapper = shallow(<PrivateDining privateDiningText="NULL" />);

    expect(wrapper.exists()).toBe(false);
  });
  test('renders when given props', () => {
    const wrapper = shallow(<PrivateDining privateDiningText="Test Text!" />);

    expect(wrapper.exists()).toBe(true);
  });
});

describe('TopTags Component', () => {
  let myObj = dummyData;
  test('renders', () => {
    const wrapper = shallow(<TopTags tags={myObj[0].tags} />);

    expect(wrapper.exists()).toBe(true);
  });
});


describe('Glyphicon Component', () => {
  const glyphTypes = [
    'Catering',
    'Cuisines',
    'Cuisine Type',
    'Dining Style',
    'Dress Code',
    'Executive Chef',
    'Hours of Operation',
    'Phone Number',
    'Website',
    'Payment Methods',
    'Private Dining',
    'Private Party Contact',
    'Private Party Facilities',
    'Public Transit',
    'Special Events and Promotions',
    'Additional Tags',
    'Review Count',
    'Address',
    'Neighborhood',
    'Cross Street',
    'Parking Details',
    'Price Range',
  ];
  test('renders a glyphicon for all the right Glyphicons', () => {
    for (let i = 0; i < glyphTypes.length; i += 1) {
      const wrapper = shallow(<Glyphicon tagName={glyphTypes[i]} />);
      expect(wrapper.exists()).toBe(true);
    }
  });
  test('renders an error Glyphicon when given an invalid input', () => {
    const wrapper = shallow(<Glyphicon tagName="__foobar!!!" />);
    expect(wrapper.find('.glyphicon-alert').exists()).toBe(true);
  });
});

describe('LocTags Component', () => {
  test('renders LocTags for every Dummy Data restaurant', () => {
    let myObj = dummyData;
    for (let i = 0; i < myObj.length; i += 1) {
      const wrapper = shallow(<LocTags restaurant={myObj[i]} />);
      expect(wrapper.exists()).toBe(true);
    }
  });
});

describe('NonALTags Component', () => {
  test('renders NonALTags for every Dummy Data restaurant', () => {
    let myObj = dummyData;
    for (let i = 0; i < myObj.length; i += 1) {
      const wrapper = shallow(<NonALTags restaurant={myObj[i]} />);
      expect(wrapper.exists()).toBe(true);
    }
  });
});

describe('Summary Component', () => {
  test('renders Summary for every Dummy Data restaurant', () => {
    let myObj = dummyData;
    for (let i = 0; i < myObj.length; i += 1) {
      const wrapper = shallow(
        <Summary
          review_average={myObj[i].review_average}
          review_count={myObj[i].review_count}
          price_range={myObj[i].price_range}
          cuisine_types={myObj[i].cuisine_types}
        />,
      );
      expect(wrapper.exists()).toBe(true);
    }
  });
});
