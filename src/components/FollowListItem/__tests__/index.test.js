import React from 'react';
import { mount } from 'enzyme';
import providerWithParams from './../../../unitTestHelpers/ProvidersWrapperWithParams';
import FollowListItem from './../../FollowListItem';

describe('should test the FollowListItem', () => {
  it('should render the component properly', () => {
    const { jsx } = providerWithParams(<FollowListItem onFollow={jest.fn()} />);
    const followListItem = mount(jsx);
    expect(followListItem.find('FollowListItem')).not.toBeNull();
  });
});
