import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { appError } from './../../actions';
import FollowList from './../../components/FollowList';

class Page extends Component {
  render() {
    return (
      <div>
        <FollowList />
      </div>
    );
  }
}

const mapStateToText = state => ({
  serverUrl: state.appReducer.serverUrl
});

export const mapDispatch = dispatch => ({
  appError: message => dispatch(appError(message))
});

export default connect(
  mapStateToText,
  mapDispatch
)(withRouter(Page));
