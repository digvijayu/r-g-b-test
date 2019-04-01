import React from 'react';
import { mount } from 'enzyme';
import providerWithParams from './../../../unitTestHelpers/ProvidersWrapperWithParams';
import FollowListItem from './../../FollowListItem';

describe('should test the FollowListItem', () => {
  it('should render the component properly', () => {
    const { jsx } = providerWithParams(<FollowListItem onFollow={jest.fn()} />);
    const followListItem = mount(jsx);
    expect(followListItem.find('FollowListItem')).not.toBeNull();
    expect(followListItem.find('FollowButton')).not.toBeNull();
    expect(followListItem.find('rg-follow-list__item')).not.toBeNull();
    expect(
      followListItem.find('rg-follow-list__item__image-div')
    ).not.toBeNull();
    expect(followListItem.find('rg-follow-list__item__image')).not.toBeNull();
    expect(followListItem.find('rg-follow-list__item__name')).not.toBeNull();
    expect(
      followListItem.find('rg-follow-list__item__description')
    ).not.toBeNull();
    expect(
      followListItem.find('rg-follow-list__item__button-div')
    ).not.toBeNull();
  });
});
