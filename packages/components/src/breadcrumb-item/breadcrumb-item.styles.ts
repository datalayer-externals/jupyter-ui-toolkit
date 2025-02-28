// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  BreadcrumbItemOptions,
  display,
  focusVisible,
  forcedColorsStylesheetBehavior,
  FoundationElementTemplate
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  accentForegroundActive,
  accentForegroundFocus,
  accentForegroundHover,
  accentForegroundRest,
  bodyFont,
  focusStrokeWidth,
  neutralForegroundRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens';
import { heightNumber } from '../styles/index';

/**
 * Styles for Breadcrumb item
 * @public
 */
export const breadcrumbItemStyles: FoundationElementTemplate<
  ElementStyles,
  BreadcrumbItemOptions
> = (context, definition) =>
  css`
    ${display('inline-flex')} :host {
        background: transparent;
        box-sizing: border-box;
        font-family: ${bodyFont};
        font-size: ${typeRampBaseFontSize};
        fill: currentColor;
        line-height: ${typeRampBaseLineHeight};
        min-width: calc(${heightNumber} * 1px);
        outline: none;
        color: ${neutralForegroundRest}
    }

    .listitem {
        display: flex;
        align-items: center;
        width: max-content;
    }

    .separator {
        margin: 0 6px;
        display: flex;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        color: ${accentForegroundRest};
        cursor: pointer;
        display: flex;
        fill: inherit;
        outline: none;
        text-decoration: none;
        white-space: nowrap;
    }

    .control:hover {
        color: ${accentForegroundHover};
    }

    .control:active {
        color: ${accentForegroundActive};
    }

    .control .content {
        position: relative;
    }

    .control .content::before {
        content: "";
        display: block;
        height: calc(${strokeWidth} * 1px);
        left: 0;
        position: absolute;
        right: 0;
        top: calc(1em + 4px);
        width: 100%;
    }

    .control:hover .content::before {
        background: ${accentForegroundHover};
    }

    .control:active .content::before {
        background: ${accentForegroundActive};
    }

    .control:${focusVisible} .content::before {
        background: ${accentForegroundFocus};
        height: calc(${focusStrokeWidth} * 1px);
    }

    .control:not([href]) {
        color: ${neutralForegroundRest};
        cursor: default;
    }

    .control:not([href]) .content::before {
        background: none;
    }

    .start,
    .end {
        display: flex;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-end: 6px;
    }

    .end {
        margin-inline-start: 6px;
    }
`.withBehaviors(
    forcedColorsStylesheetBehavior(css`
      .control:hover .content::before,
                .control:${focusVisible} .content::before {
        background: ${SystemColors.LinkText};
      }
      .start,
      .end {
        fill: ${SystemColors.ButtonText};
      }
    `)
  );
