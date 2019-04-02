import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import FollowButton from './../FollowButton';
import { followProfile } from './../../actions';
import './style.scss';

class FollowListItem extends Component {
  handleOnClick() {
    this.props.followProfile(this.props.profile);
  }

  render() {
    const { name, description, image } = this.props.profile;
    return (
      <div className="rg-follow-list__item">
        <div className="rg-follow-list__item__image-div">
          <div
            className="rg-follow-list__item__image"
            style={{ backgroundImage: 'url(' + image + ')' }}
          />
        </div>
        <div className="rg-follow-list__item__name-div">
          <div className="rg-follow-list__item__name">{name}</div>
          <div className="rg-follow-list__item__description">{description}</div>
        </div>
        <div className="rg-follow-list__item__button-div">
          <FollowButton onClick={this.handleOnClick.bind(this)} />
        </div>
      </div>
    );
  }
}

FollowListItem.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    city: PropTypes.string,
    job: PropTypes.string,
    company: PropTypes.string,
    description: PropTypes.string,
    country: PropTypes.string,
    gender: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    isFollowing: PropTypes.bool
  }).isRequired
};

const mapStateToProps = state => ({});

const mapDispatch = dispatch => ({
  followProfile: profile => dispatch(followProfile(profile))
});

export default connect(
  mapStateToProps,
  mapDispatch
)(FollowListItem);
