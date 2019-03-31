import jest from 'jest';
import { getImageUrl, isSupportedLanguage } from './../../utils';

describe('should test the util functions', () => {
  test('should generate proper image url when url is not provided', () => {
    let inputs = ['/image/url', '/different/asset/path'];
    let actual = inputs.map(url => getImageUrl(url));
    let expected = ['/image/url', '/different/asset/path'];
    expect(actual).toEqual(expected);
  });

  test('should generate proper image url when url is provided', () => {
    let inputs = [
      {
        url: 'http://localhost:4000',
        asset: '/image/url'
      },
      {
        url: 'http://dev.tcm-web.io',
        asset: '/different/asset/path'
      }
    ];
    let actual = inputs.map(({ url, asset }) => getImageUrl(asset, url));
    let expected = [
      'http://localhost:4000/image/url',
      'http://dev.tcm-web.io/different/asset/path'
    ];
    expect(actual).toEqual(expected);
  });

  test('should return if the language is supported', () => {
    expect(isSupportedLanguage('en')).toEqual(true);
    expect(isSupportedLanguage('de')).toEqual(true);
    expect(isSupportedLanguage('ru')).toEqual(false);
    expect(isSupportedLanguage('sm')).toEqual(false);
  });
});
