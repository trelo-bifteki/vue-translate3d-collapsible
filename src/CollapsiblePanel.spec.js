/* eslint-env jest */

import CollapsiblePanel from './CollapsiblePanel';
import { shallowMount } from '@vue/test-utils';

describe(`CollapsiblePanel`, () => {

  it(`renders expanded equals true`, () => {
    const wrapper = shallowMount(CollapsiblePanel, {
      propsData: { expanded: true},
    });

    expect(wrapper).toBeDefined();
  });
});
