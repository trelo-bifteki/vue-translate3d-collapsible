/* eslint-env jest */

import CollapsiblePanel from './CollapsiblePanel.vue';
import { shallowMount } from '@vue/test-utils';

describe(`CollapsiblePanel`, () => {
  const createWrapper = initExpanded => {
    return shallowMount(CollapsiblePanel, {
      propsData: {
        initExpanded,
      },
    });
  };

  it(`shows main container  when expaded is true`, () => {
    const wrapper = createWrapper(true);

    expect(
      wrapper.contains(`.collapsible-panel__container`)
    ).toBe(true);
  });

  it(`hides main container when expanded is false`, () => {
    const wrapper = createWrapper(false);

    expect(
      wrapper.contains(`.collapsible-panel__container`)
    ).toBe(false);
  });

  it(`shows action container when expanded is true`, () => {
    const wrapper = createWrapper(true);

    expect(
      wrapper.contains(`.collapsible-panel__actions`)
    ).toBe(true);
  });

  it(`shows triangle icon heading down when expanded is true`, () => {
        const wrapper = createWrapper(true);

        expect(
          wrapper.contains(`.collapsible-panel__triangle--expanded`)
        ).toBe(true);
  });

  it(`shows triangle icon heading down when expanded is true`, () => {
        const wrapper = createWrapper(false);

        expect(
          wrapper.contains(`.collapsible-panel__triangle`)
        ).toBe(true);
  });

  it(`hides actions container when expanded is false`, () => {
    const wrapper = createWrapper(false);

    expect(
      wrapper.contains(`.collapsible-panel__actions`)
    ).toBe(false);
  });
});
