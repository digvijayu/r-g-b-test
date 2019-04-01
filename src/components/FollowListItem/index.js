import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class FollowListItem extends Component {
  render() {
    return <div>List Item</div>;
  }
}

FollowListItem.propTypes = {
  onFollow: PropTypes.func.isRequired
};

export default FollowListItem;
