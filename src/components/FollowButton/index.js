import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Text from './../Text';
import './style.scss';

class FollowButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button className="rg-follow-button" onClick={onClick}>
        <i className="rg-follow-button__icon" />
        <span className="rg-follow-button__text">
          <Text>Follow.Button.Text</Text>
        </span>
      </button>
    );
  }
}

FollowButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default FollowButton;
