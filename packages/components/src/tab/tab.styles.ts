// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  accentFillFocus,
  bodyFont,
  controlCornerRadius,
  designUnit,
  disabledOpacity,
  focusStrokeWidth,
  neutralFillActive,
  neutralFillHover,
  neutralFillRest,
  neutralFillStealthRest,
  neutralForegroundHint,
  neutralForegroundRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '@microsoft/fast-components';
import { css, ElementStyles } from '@microsoft/fast-element';
import {
  disabledCursor,
  display,
  focusVisible,
  forcedColorsStylesheetBehavior,
  FoundationElementTemplate
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import { heightNumber } from '../styles';

/**
 * Styles for Tab
 * @public
 */
export const tabStyles: FoundationElementTemplate<ElementStyles> = (
  context,
  definition
) =>
  css`
    ${display('inline-flex')} :host {
      box-sizing: border-box;
      font-family: ${bodyFont};
      font-size: ${typeRampBaseFontSize};
      line-height: ${typeRampBaseLineHeight};
      height: calc(${heightNumber} * 1px);
      padding: calc(${designUnit} * 5px) calc(${designUnit} * 4px);
      color: ${neutralForegroundHint};
      fill: currentcolor;
      border-radius: 0 0 calc(${controlCornerRadius} * 1px)
        calc(${controlCornerRadius} * 1px);
      border: calc(${strokeWidth} * 1px) solid transparent;
      align-items: center;
      grid-row: 2;
      justify-content: center;
      cursor: pointer;
    }

    :host(:hover) {
      color: ${neutralForegroundRest};
      fill: currentcolor;
    }

    :host(:active) {
      color: ${neutralForegroundRest};
      fill: currentcolor;
    }

    :host([disabled]) {
      cursor: ${disabledCursor};
      opacity: ${disabledOpacity};
    }

    :host([disabled]:hover) {
      color: ${neutralForegroundHint};
      background: ${neutralFillStealthRest};
    }

    :host([aria-selected='true']) {
      background: ${neutralFillRest};
      color: ${neutralForegroundRest};
      fill: currentcolor;
    }

    :host([aria-selected='true']:hover) {
      background: ${neutralFillHover};
      color: ${neutralForegroundRest};
      fill: currentcolor;
    }

    :host([aria-selected='true']:active) {
      background: ${neutralFillActive};
      color: ${neutralForegroundRest};
      fill: currentcolor;
    }

    :host(:${focusVisible}) {
      outline: none;
      border-color: ${accentFillFocus};
      box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px)
        ${accentFillFocus};
    }

    :host(:focus) {
      outline: none;
    }

    :host(.vertical) {
      justify-content: end;
      grid-column: 2;
      border-bottom-left-radius: 0;
      border-top-right-radius: calc(${controlCornerRadius} * 1px);
    }

    :host(.vertical[aria-selected='true']) {
      z-index: 2;
    }

    :host(.vertical:hover) {
      color: ${neutralForegroundRest};
    }

    :host(.vertical:active) {
      color: ${neutralForegroundRest};
    }

    :host(.vertical:hover[aria-selected='true']) {
    }
  `.withBehaviors(
    forcedColorsStylesheetBehavior(css`
      :host {
        forced-color-adjust: none;
        border-color: transparent;
        color: ${SystemColors.ButtonText};
        fill: currentcolor;
      }
      :host(:hover),
      :host(.vertical:hover),
      :host([aria-selected='true']:hover) {
        background: ${SystemColors.Highlight};
        color: ${SystemColors.HighlightText};
        fill: currentcolor;
      }
      :host([aria-selected='true']) {
        background: ${SystemColors.HighlightText};
        color: ${SystemColors.Highlight};
        fill: currentcolor;
      }
      :host(:${focusVisible}) {
        border-color: ${SystemColors.ButtonText};
        box-shadow: none;
      }
      :host([disabled]),
      :host([disabled]:hover) {
        opacity: 1;
        color: ${SystemColors.GrayText};
        background: ${SystemColors.ButtonFace};
      }
    `)
  );
