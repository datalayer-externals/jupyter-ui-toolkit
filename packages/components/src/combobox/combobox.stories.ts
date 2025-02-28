// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { getFaIcon, setTheme } from '../utilities/storybook';
import { Combobox } from './index';

export default {
  title: 'Components/Combobox',
  argTypes: {
    isOpen: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    customIndicator: { control: 'boolean' },
    numberOfChildren: { control: 'number' },
    isMinimal: { control: 'boolean' },
    hasAutoWidth: { control: 'boolean' },
    autocomplete: {
      control: 'select',
      options: ['none', 'inline', 'list', 'both']
    },
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    }
  }
} as Meta;

const nameList = [
  'William Hartnell',
  'Patrick Troughton',
  'Jon Pertwee',
  'Tom Baker',
  'Peter Davidson',
  'Colin Baker',
  'Sylvester McCoy',
  'Paul McGann',
  'Christopher Eccleston',
  'David Tenant',
  'Matt Smith',
  'Peter Capaldi',
  'Jodie Whittaker'
];

const Template: StoryFn = (args, context): HTMLElement => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-combobox 
      ${args.isDisabled ? 'disabled' : ''}
      ${args.isMinimal ? 'minimal' : ''}
      ${args.hasAutoWidth ? 'autowidth' : ''}
      ${args.autocomplete !== 'none' ? `autocomplete=${args.autocomplete}` : ''}
    >
      ${args.customIndicator ? getFaIcon('sliders-h', 'indicator') : ''}
        ${new Array(args.numberOfChildren ?? 10)
          .fill(0)
          .map((_, index) => {
            const name = nameList[index];
            return `<jp-option value="${index}">${
              name ? name : `Option ${index + 1}`
            }</jp-option>`;
          })
          .join('\n')}
    </jp-combobox>`
  );

  const combobox = container.firstChild as Combobox;

  if (args.isOpen) {
    combobox.setAttribute('open', '');
  }

  if (args.onChange) {
    combobox.addEventListener('change', args.onChange);
  }

  return combobox;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  isOpen: false,
  isDisabled: false,
  customIndicator: false,
  numberOfChildren: 10,
  isMinimal: false,
  hasAutoWidth: false,
  autocomplete: 'none',
  onChange: action('combobox-onchange')
};

export const WithOpen: StoryObj = { render: Template.bind({}) };
WithOpen.args = {
  ...Default.args,
  isOpen: true
};

export const WithAutoWidth: StoryObj = { render: Template.bind({}) };
WithAutoWidth.args = {
  ...Default.args,
  hasAutoWidth: true
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithCustomIndicator: StoryObj = { render: Template.bind({}) };
WithCustomIndicator.args = {
  ...Default.args,
  customIndicator: true
};
