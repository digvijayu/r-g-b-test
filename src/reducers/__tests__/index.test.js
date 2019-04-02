import jest from 'jest';
import { initialAppState, appReducer } from './../../reducers';
import { appError, followSuggestionsLoaded } from './../../actions';

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
});
