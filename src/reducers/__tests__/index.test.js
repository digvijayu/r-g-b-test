import jest from 'jest';
import { initialAppState, appReducer } from './../../reducers';
import { appError } from './../../actions';

describe('should test reducer', () => {
  test('should verify the initial state', () => {
    let expected = {
      error: {
        message: ''
      },
      serverUrl: window.location.origin
    };
    expect(initialAppState).toEqual(expected);
  });

  test('should reduce the application error action', () => {
    const newState = appReducer();
    expect(newState).toEqual({
      error: {
        message: ''
      },
      serverUrl: window.location.origin
    });
  });

  test('should reduce the application error action with custom state', () => {
    const newState = appReducer(
      {
        error: {
          message: 'Some'
        },
        serverUrl: window.location.origin
      },
      appError('Some Message 1')
    );
    expect(newState).toEqual({
      error: {
        message: 'Some Message 1'
      },
      serverUrl: window.location.origin
    });
  });
});
