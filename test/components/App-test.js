import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from '../../src/components/App';

describe('App component', () => {
  it('should render correctly', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const output = renderer.getRenderOutput();
    expect(output.props.children).toBe('App');
  });
});
