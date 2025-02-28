// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  display,
  forcedColorsStylesheetBehavior,
  FoundationElementTemplate,
  TabsOptions
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  accentFillRest,
  bodyFont,
  controlCornerRadius,
  designUnit,
  neutralForegroundRest,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens';
import { heightNumber } from '../styles/index';

/**
 * Styles for Tabs
 * @public
 */
export const tabsStyles: FoundationElementTemplate<
  ElementStyles,
  TabsOptions
> = (context, definition) =>
  css`
    ${display('grid')} :host {
      box-sizing: border-box;
      font-family: ${bodyFont};
      font-size: ${typeRampBaseFontSize};
      line-height: ${typeRampBaseLineHeight};
      color: ${neutralForegroundRest};
      grid-template-columns: auto 1fr auto;
      grid-template-rows: auto 1fr;
    }

    .tablist {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto;
      position: relative;
      width: max-content;
      align-self: end;
      padding: calc(${designUnit} * 4px) calc(${designUnit} * 4px) 0;
      box-sizing: border-box;
    }

    .start,
    .end {
      align-self: center;
    }

    .activeIndicator {
      grid-row: 1;
      grid-column: 1;
      width: 100%;
      height: 4px;
      justify-self: center;
      background: ${accentFillRest};
      margin-top: 0;
      border-radius: calc(${controlCornerRadius} * 1px)
        calc(${controlCornerRadius} * 1px) 0 0;
    }

    .activeIndicatorTransition {
      transition: transform 0.01s ease-in-out;
    }

    .tabpanel {
      grid-row: 2;
      grid-column-start: 1;
      grid-column-end: 4;
      position: relative;
    }

    :host([orientation='vertical']) {
      grid-template-rows: auto 1fr auto;
      grid-template-columns: auto 1fr;
    }

    :host([orientation='vertical']) .tablist {
      grid-row-start: 2;
      grid-row-end: 2;
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: auto 1fr;
      position: relative;
      width: max-content;
      justify-self: end;
      align-self: flex-start;
      width: 100%;
      padding: 0 calc(${designUnit} * 4px)
        calc((${heightNumber} - ${designUnit}) * 1px) 0;
    }

    :host([orientation='vertical']) .tabpanel {
      grid-column: 2;
      grid-row-start: 1;
      grid-row-end: 4;
    }

    :host([orientation='vertical']) .end {
      grid-row: 3;
    }

    :host([orientation='vertical']) .activeIndicator {
      grid-column: 1;
      grid-row: 1;
      width: 4px;
      height: 100%;
      margin-inline-end: 0px;
      align-self: center;
      border-radius: calc(${controlCornerRadius} * 1px) 0 0
        calc(${controlCornerRadius} * 1px);
    }

    :host([orientation='vertical']) .activeIndicatorTransition {
      transition: transform 0.01s ease-in-out;
    }
  `.withBehaviors(
    forcedColorsStylesheetBehavior(css`
      .activeIndicator,
      :host([orientation='vertical']) .activeIndicator {
        forced-color-adjust: none;
        background: ${SystemColors.Highlight};
      }
    `)
  );
