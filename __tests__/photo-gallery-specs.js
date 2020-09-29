/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('<App />', () => {
  const wrapper = mount(<App />); // mount/render/shallow when applicable
  it('should render an unordered list to the page', () => {
    expect(wrapper.find('ul')).toExist();
  });
  it('should render buttons to the page', () => {
    expect(wrapper.find('button')).toExist();
  });
  it('should not have an a span on the page', () => {
    expect(wrapper.find('span')).not.toExist();
  });
});
