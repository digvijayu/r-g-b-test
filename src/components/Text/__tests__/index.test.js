import React from 'react';
import { mount } from 'enzyme';
import providers from './../../../unitTestHelpers/ProvidersWrapper';
import Text from './../../Text';

describe('should test the Text component', () => {
  test('should render text from en.json', () => {
    const text = mount(providers(<Text>Test.Text1</Text>));
    expect(text.find('Text').text()).toEqual('Some Test Text');
  });

  test('should render and embed text placeholders from en.json', () => {
    const text = mount(
      providers(<Text values={{ param: 'this' }}>Test.Text.With.Param</Text>)
    );
    expect(text.find('Text').text()).toEqual('Some text with this parameter');
  });

  test('should render itself if no match was found from en.json', () => {
    const text = mount(
      providers(<Text>this.text.does.not.exist.in.en.json</Text>)
    );
    expect(text.find('Text').text()).toEqual(
      'this.text.does.not.exist.in.en.json'
    );
  });

  test('should render itself with replaced param if no match was found from en.json', () => {
    const text = mount(
      providers(
        <Text values={{ file: 'en.json' }}>
          {'this.text.does.not.exist.in.{file}'}
        </Text>
      )
    );
    expect(text.find('Text').text()).toEqual(
      'this.text.does.not.exist.in.en.json'
    );
  });
});
