import React, { Component } from 'react';
import { connect } from 'react-redux';
import FollowListItem from './../FollowListItem';
import { followSuggestionsLoaded } from './../../actions';
import { USER_PROFILES } from './../../utils/constants';
import Spinner from './../Spinner';
import './style.scss';

class FollowList extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.followSuggestionsLoaded(USER_PROFILES);
    }, 1000);
  }

  render() {
    const { followSuggestions, isLoading } = this.props;
    return (
      <div
        className={
          'rg-follow-list ' + (isLoading ? '' : 'rg-follow-list--shadow')
        }
      >
        {isLoading && (
          <div className="rg-follow-list__spinner-div">
            <Spinner />
          </div>
        )}
        {followSuggestions.map((profile, i) => (
          <FollowListItem key={i} profile={profile} />
        ))}
      </div>
    );
  }
}

FollowList.propTypes = {};

const mapStateToProps = state => ({
  followSuggestions: state.appReducer.followSuggestions,
  isLoading: state.appReducer.isLoading
});

const mapDispatch = dispatch => ({
  followSuggestionsLoaded: userProfiles =>
    dispatch(followSuggestionsLoaded(userProfiles))
});

export default connect(
  mapStateToProps,
  mapDispatch
)(FollowList);
