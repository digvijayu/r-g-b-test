import jest from 'jest';
import {
  appError,
  followSuggestionsLoaded,
  followProfile
} from './../../actions';

describe('should test actions', () => {
  test('should counstuct action, appError', () => {
    expect(appError('Random test error message.')).toEqual({
      type: 'APPLICATION_ERROR',
      message: 'Random test error message.'
    });
  });

  test('should counstuct action, followSuggestionsLoaded', () => {
    expect(
      followSuggestionsLoaded([
        {
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
          address: '31296 Calypso Parkway'
        }
      ])
    ).toEqual({
      type: 'FOLLOW_SUGGESTIONS_LOADED',
      userProfiles: [
        {
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
          address: '31296 Calypso Parkway'
        }
      ]
    });
  });

  test('should counstuct action, appError', () => {
    expect(
      followProfile({
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
        address: '31296 Calypso Parkway'
      })
    ).toEqual({
      type: 'FOLLOW_PROFILE',
      profile: {
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
        address: '31296 Calypso Parkway'
      }
    });
  });
});
