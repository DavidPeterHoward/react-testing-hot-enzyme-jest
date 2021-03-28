// import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toMatchImageSnapshot from 'jest-image-snapshot';

import 'jest-enzyme';
import 'jest-styled-components';
import toJson from 'enzyme-to-json';

expect.extend({
  toMatchImageSnapshot,
});

configure({ adapter: new Adapter() });
