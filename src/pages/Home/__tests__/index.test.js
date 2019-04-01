import React from 'react';
import { mount } from 'enzyme';
import providerWithParams from './../../../unitTestHelpers/ProvidersWrapperWithParams';
import Home from './../../Home';

describe('should test HomePage', () => {
  test('should render the homepage and follow list with it', () => {
    const { jsx } = providerWithParams(<Home />);
    const home = mount(jsx);
    expect(home.find('Home')).not.toBeNull();
    expect(home.find('FollowList')).not.toBeNull();
  });
});
