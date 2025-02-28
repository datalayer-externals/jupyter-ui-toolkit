// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Components/Accordion Item',

  parameters: {
    controls: {
      disabled: true
    },
    actions: {
      disabled: true
    }
  }
} as Meta;

const Template: StoryFn = (args, context): string => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-accordion-item>
      Accordion one content<div slot="heading">Accordion one</div>
    </jp-accordion-item>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {};
