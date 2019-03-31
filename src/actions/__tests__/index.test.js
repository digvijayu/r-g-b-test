import jest from 'jest';
import { appError } from './../../actions';

describe('should test actions', () => {
  test('should counstuct action, appError', () => {
    expect(appError('Random test error message.')).toEqual({
      type: 'APPLICATION_ERROR',
      message: 'Random test error message.'
    });
  });
});
