import jest from 'jest';
import { initialAppState, appReducer } from './../../reducers';
import {
  appError,
  followSuggestionsLoaded,
  followProfile
} from './../../actions';

describe('should test reducer', () => {
  test('should verify the initial state', () => {
    let expected = {
      error: {
        message: ''
      },
      serverUrl: window.location.origin,
      followSuggestions: [],
      isLoading: true
    };
    expect(initialAppState).toEqual(expected);
  });

  test('should reduce the application error action', () => {
    const newState = appReducer();
    expect(newState).toEqual({
      error: {
        message: ''
      },
      serverUrl: window.location.origin,
      followSuggestions: [],
      isLoading: true
    });
  });

  test('should reduce the application error action with custom state', () => {
    const newState = appReducer(
      {
        error: {
          message: 'Some'
        },
        serverUrl: window.location.origin,
        followSuggestions: [],
        isLoading: true
      },
      appError('Some Message 1')
    );
    expect(newState).toEqual({
      error: {
        message: 'Some Message 1'
      },
      serverUrl: window.location.origin,
      followSuggestions: [],
      isLoading: true
    });
  });

  test('should reduce the application action followSuggestionsLoaded', () => {
    const newState = appReducer(
      {
        error: {
          message: 'Some'
        },
        serverUrl: window.location.origin,
        followSuggestions: [],
        isLoading: true
      },
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
    );
    expect(newState).toEqual({
      error: {
        message: 'Some'
      },
      serverUrl: window.location.origin,
      followSuggestions: [
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
      ],
      isLoading: false
    });
  });

  test('should reduce the application error action to follow a profile', () => {
    const newState = appReducer(
      {
        error: {
          message: ''
        },
        serverUrl: window.location.origin,
        followSuggestions: [
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
        ],
        isLoading: false
      },
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
    );
    expect(newState).toEqual({
      error: {
        message: ''
      },
      serverUrl: window.location.origin,
      followSuggestions: [],
      isLoading: false
    });
  });

  test('should reduce the application error action to follow a profile when multiple items are present', () => {
    const newState = appReducer(
      {
        error: {
          message: ''
        },
        serverUrl: window.location.origin,
        followSuggestions: [
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
          },
          {
            id: '2',
            image: 'assets/female/Heather-Morales.jpg',
            city: 'Zelenogradsk',
            job: 'Analyst Programmer',
            company: 'Yambee',
            description: 'Analyst Programmer, Yambee',
            country: 'Russia',
            gender: 'female',
            firstname: 'Heather',
            lastname: 'Morales',
            name: 'Heather Morales',
            email: 'hmorales1@un.org',
            phone: '7-(897)249-9830',
            address: '42604 Scofield Center'
          }
        ],
        isLoading: false
      },
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
    );
    expect(newState).toEqual({
      error: {
        message: ''
      },
      serverUrl: window.location.origin,
      followSuggestions: [
        {
          id: '2',
          image: 'assets/female/Heather-Morales.jpg',
          city: 'Zelenogradsk',
          job: 'Analyst Programmer',
          company: 'Yambee',
          description: 'Analyst Programmer, Yambee',
          country: 'Russia',
          gender: 'female',
          firstname: 'Heather',
          lastname: 'Morales',
          name: 'Heather Morales',
          email: 'hmorales1@un.org',
          phone: '7-(897)249-9830',
          address: '42604 Scofield Center'
        }
      ],
      isLoading: false
    });
  });
});
