// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { setTheme } from '../utilities/storybook';

export default {
  title: 'Tabs',
  argTypes: {
    activePanel: { control: 'select', options: [null, 'One', 'Two', 'Three'] },
    activeIndicator: { control: 'boolean' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] }
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
};

const Template = (
  args,
  { globals: { backgrounds, accent }, parameters }
): string => {
  setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-tabs 
    ${!args.activeIndicator && 'activeIndicator="false"'}
    ${args.activePanel ? `activeId=Tab${args.activePanel}` : ''}
    orientation="${args.orientation}"
  >
    <jp-tab id="TabOne">Tab one</jp-tab>
    <jp-tab id="TabTwo">Tab two</jp-tab>
    <jp-tab id="TabThree">Tab three</jp-tab>
    <jp-tab-panel id="TabPanelOne">
        Tab one content. This is for testing.
    </jp-tab-panel>
    <jp-tab-panel id="TabPanelTwo">
        Tab two content. This is for testing.
    </jp-tab-panel>
    <jp-tab-panel id="TabPanelThree">
        Tab three content. This is for testing.
    </jp-tab-panel>
  </jp-tabs>`;
};

export const Default = Template.bind({});
Default.args = {
  activePanel: null,
  activeIndicator: true,
  orientation: 'horizontal'
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...Default.args,
  orientation: 'vertical'
};

export const WithoutIndicator = Template.bind({});
WithoutIndicator.args = {
  ...Default.args,
  activeIndicator: false
};
