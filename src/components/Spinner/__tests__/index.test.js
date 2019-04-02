import React from 'react';
import { mount } from 'enzyme';
import providers from './../../../unitTestHelpers/ProvidersWrapper';
import Spinner from './../../Spinner';

describe('should test the Spinner component', () => {
  test('should render the component', () => {
    const spinner = mount(providers(<Spinner />));
    expect(spinner.find('.rg-spinner-eclipse')).not.toBeUndefined();
    expect(spinner.find('.rg-spinner-eclipse__div')).not.toBeUndefined();
  });
});
