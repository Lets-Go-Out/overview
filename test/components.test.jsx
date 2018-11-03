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
    for (let i = 0; i < myObj.length; i += 1) {
      myObj[i].cuisine_types = myObj[i].cuisine_types.split(',');
      const wrapper = shallow(<Details restaurant={myObj[i]} />);
      expect(wrapper.exists()).toBe(true);
    }
  });
});

describe('PrivateDining Component', () => {
  test('renders when given no props', () => {
    const wrapper = shallow(<PrivateDining />);

    expect(wrapper.exists()).toBe(true);
  });
  test('renders when given "NULL" as input', () => {
    const wrapper = shallow(<PrivateDining privateDiningText="NULL" />);

    expect(wrapper.exists()).toBe(true);
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
    'Party Contact',
    'Party Facilities',
    'Public Transit',
    'Specials and Promotions',
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
          cuisine_types={myObj[i].cuisine_types}
        />,
      );
      expect(wrapper.exists()).toBe(true);
    }
  });
});
