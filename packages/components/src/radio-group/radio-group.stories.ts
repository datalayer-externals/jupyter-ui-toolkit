// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Components/Radio Group',
  argTypes: {
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: StoryFn = (args, context): HTMLElement => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-radio-group
      orientation=${args.orientation}
      ${args.isDisabled ? 'disabled' : ''}
      ${args.isReadOnly ? 'readonly' : ''}
    >
      <label slot="label" style="color: var(--neutral-foreground-rest)">Fruit</label>
      <jp-radio value="apples">Apples</jp-radio>
      <jp-radio value="oranges">Oranges</jp-radio>
      <jp-radio value="bananas">Bananas</jp-radio>
      <jp-radio value="kiwi">Kiwi</jp-radio>
      <jp-radio value="grapefruit">Grapefruit</jp-radio>
      <jp-radio value="mango">Mango</jp-radio>
      <jp-radio value="blueberries">Blueberries</jp-radio>
      <jp-radio value="strawberries">Strawberries</jp-radio>
      <jp-radio value="pineapple">Pineapple</jp-radio>
    </jp-radio-group>`
  );

  const radioGroup = container.firstChild as HTMLElement;

  if (args.onChange) {
    radioGroup.addEventListener('change', args.onChange);
  }

  return radioGroup;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  isDisabled: false,
  isReadOnly: false,
  orientation: 'horizontal',
  onChange: action('radio-onchange')
};

export const Vertical: StoryObj = { render: Template.bind({}) };
Vertical.args = {
  ...Default.args,
  orientation: 'vertical'
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithReadOnly: StoryObj = { render: Template.bind({}) };
WithReadOnly.args = {
  ...Default.args,
  isDisabled: true
};
