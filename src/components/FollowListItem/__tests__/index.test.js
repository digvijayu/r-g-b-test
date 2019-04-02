import React from 'react';
import { mount } from 'enzyme';
import providerWithParams from './../../../unitTestHelpers/ProvidersWrapperWithParams';
import FollowListItem from './../../FollowListItem';

describe('should test the FollowListItem', () => {
  it('should render the component properly', () => {
    const { jsx } = providerWithParams(
      <FollowListItem
        profile={{
          id: '1',
          image: 'assets/female/Cheryl-Carter.jpg',
          city: 'Mādārīpur',
          job: 'Senior Financial Analyst',
          company: 'Skyble',
          description: 'Senior Financial Analyst, Skyble',
          country: 'Bangladesh',
          gender: 'female',
          firstname: 'Cheryl',
          lastname: 'Carter',
          name: 'Cheryl Carter',
          email: 'ccarter0@1und1.de',
          phone: '2-(017)772-7449',
          address: '31296 Calypso Parkway',
          isFollowing: false
        }}
      />
    );
    const followListItem = mount(jsx);
    expect(followListItem.find('FollowListItem')).not.toBeUndefined();
    expect(followListItem.find('FollowButton')).not.toBeUndefined();
    expect(followListItem.find('.rg-follow-list__item')).not.toBeUndefined();
    expect(
      followListItem.find('.rg-follow-list__item__image-div')
    ).not.toBeUndefined();
    expect(
      followListItem.find('.rg-follow-list__item__image')
    ).not.toBeUndefined();
    expect(
      followListItem.find('.rg-follow-list__item__image').get(0).props.style
    ).toHaveProperty('backgroundImage', 'url(assets/female/Cheryl-Carter.jpg)');
    expect(
      followListItem.find('.rg-follow-list__item__name')
    ).not.toBeUndefined();
    expect(followListItem.find('.rg-follow-list__item__name').text()).toBe(
      'Cheryl Carter'
    );
    expect(
      followListItem.find('.rg-follow-list__item__description')
    ).not.toBeUndefined();
    expect(
      followListItem.find('.rg-follow-list__item__description').text()
    ).toBe('Senior Financial Analyst, Skyble');
    expect(
      followListItem.find('.rg-follow-list__item__button-div')
    ).not.toBeUndefined();
  });
});
