import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from '../../components/HelloWorld';

describe('HelloWorld', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<HelloWorld />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
