import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Text from './../Text';

class FollowButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick}>
        <Text>Follow.Button.Text</Text>
      </button>
    );
  }
}

FollowButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default FollowButton;
