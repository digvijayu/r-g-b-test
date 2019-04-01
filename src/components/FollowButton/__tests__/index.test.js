import React from 'react';
import { mount } from 'enzyme';
import providerWithParams from './../../../unitTestHelpers/ProvidersWrapperWithParams';
import FollowButton from './../../FollowButton';

describe('should test the FollowButton Component', () => {
  it('should render the button with expected text', () => {
    const { jsx } = providerWithParams(
      <FollowButton onClick={() => {}}/>
    );
    const button = mount(jsx);
    expect(button.find('FollowButton').find('button').text()).toEqual('Follow');
  });

  it('should invoke onClick event on click', () => {
    const mockHandleOnClick = jest.fn();
    const { jsx } = providerWithParams(
      <FollowButton onClick={mockHandleOnClick}/>
    );
    const button = mount(jsx);
    button.find('button').simulate('click');
    expect(mockHandleOnClick.mock.calls.length).toEqual(1);
  });
});
