import React from 'react';
import { mount } from 'enzyme';
import providerWithParams from './../../../unitTestHelpers/ProvidersWrapperWithParams';
import FollowList from './../../FollowList';

describe('should test the FollowList', () => {
  test('shoule render the component properly', () => {
    const { jsx } = providerWithParams(<FollowList />);
    const followList = mount(jsx);
    expect(followList.find('FollowList')).not.toBeNull();
  });
});
