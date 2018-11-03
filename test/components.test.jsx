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
    const wrapper = shallow(<Description />);

    expect(wrapper.exists()).toBe(true);
  });
});
describe('Details Component', () => {
  test('renders', () => {
    const wrapper = shallow(<Details />);

    expect(wrapper.exists()).toBe(true);
  });
});
describe('LocTags Component', () => {
  test('renders', () => {
    const wrapper = shallow(<LocTags />);

    expect(wrapper.exists()).toBe(true);
  });
});
describe('NonALTags Component', () => {
  test('renders', () => {
    const wrapper = shallow(<NonALTags />);

    expect(wrapper.exists()).toBe(true);
  });
});
describe('PrivateDining Component', () => {
  test('renders', () => {
    const wrapper = shallow(<PrivateDining />);

    expect(wrapper.exists()).toBe(true);
  });
});
describe('Summary Component', () => {
  test('renders', () => {
    const wrapper = shallow(<Summary />);

    expect(wrapper.exists()).toBe(true);
  });
});
describe('TopTags Component', () => {
  test('renders', () => {
    const wrapper = shallow(<TopTags />);

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
    for (let i = 0; i < dummyData.length; i += 1) {
      const wrapper = shallow(<LocTags restaurant={dummyData[i]} />);
      expect(wrapper.exists()).toBe(true);
    }
  });
});

describe('NonALTags Component', () => {
  test('renders NonALTags for every Dummy Data restaurant', () => {
    for (let i = 0; i < dummyData.length; i += 1) {
      const wrapper = shallow(<NonALTags restaurant={dummyData[i]} />);
      expect(wrapper.exists()).toBe(true);
    }
  });
});

describe('Summary Component', () => {
  test('renders Summary for every Dummy Data restaurant', () => {
    for (let i = 0; i < dummyData.length; i += 1) {
      const wrapper = shallow(
        <Summary
          review_average={dummyData[i].review_average}
          review_count={dummyData[i].review_count}
          cuisine_types={dummyData[i].cuisine_types}
        />,
      );
      expect(wrapper.exists()).toBe(true);
    }
  });
});
