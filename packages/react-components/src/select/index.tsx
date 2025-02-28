// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { provideJupyterDesignSystem, jpSelect } from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Select: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    autowidth?: boolean;
    disabled?: boolean;
    minimal?: boolean;
    open?: boolean;
    position?: 'above' | 'below';
    value?: string;
  },
  HTMLElement
> = wrap(jpSelect(), {
  events: {
    onChange: 'change',
    onInput: 'input'
  }
}) as any;
// @ts-expect-error unknown property
Select.displayName = 'Jupyter.Select';
