import React, { Component } from 'react';
import FollowButton from './../FollowButton';
import './style.scss';

class FollowListItem extends Component {
  handleOnClick() {}

  render() {
    const { name, description, image } = {
      name: 'Cheryl Carter',
      description: 'Senior Financial Analyst, Skyble',
      image: 'assets/female/Cheryl-Carter.jpg'
    };
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

FollowListItem.propTypes = {};

export default FollowListItem;
