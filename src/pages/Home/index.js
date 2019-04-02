import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { appError } from './../../actions';
import FollowList from './../../components/FollowList';
import './style.scss';

class Home extends Component {
  render() {
    return (
      <div className="rg-home-page">
        <div className="rg-home-page__list-div">
          <FollowList />
        </div>
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
)(withRouter(Home));
