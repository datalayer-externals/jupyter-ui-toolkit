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
  neutralFillHover,
  neutralFillInputActive,
  neutralFillInputHover,
  neutralFillInputRest,
  neutralFillRest,
  neutralFillStrongActive,
  neutralFillStrongHover,
  neutralFillStrongRest,
  neutralForegroundRest,
  neutralStrokeRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens';
import { css, ElementStyles } from '@microsoft/fast-element';
import {
  disabledCursor,
  display,
  focusVisible,
  forcedColorsStylesheetBehavior,
  FoundationElementTemplate
} from '@microsoft/fast-foundation';
import { heightNumber } from '../styles/index';

/**
 * Styles for Text Area
 * @public
 */
export const textAreaStyles: FoundationElementTemplate<ElementStyles> = (
  context,
  definition
) =>
  css`
    ${display('inline-block')} :host {
      font-family: ${bodyFont};
      outline: none;
      user-select: none;
    }

    .control {
      box-sizing: border-box;
      position: relative;
      color: ${neutralForegroundRest};
      background: ${neutralFillInputRest};
      border-radius: calc(${controlCornerRadius} * 1px);
      border: calc(${strokeWidth} * 1px) solid ${neutralFillStrongRest};
      height: calc(${heightNumber} * 2px);
      font: inherit;
      font-size: ${typeRampBaseFontSize};
      line-height: ${typeRampBaseLineHeight};
      padding: calc(${designUnit} * 2px + 1px);
      width: 100%;
      resize: none;
    }

    .control:hover:enabled {
      background: ${neutralFillInputHover};
      border-color: ${neutralFillStrongHover};
    }

    .control:active:enabled {
      background: ${neutralFillInputActive};
      border-color: ${neutralFillStrongActive};
    }

    .control:hover,
    .control:${focusVisible},
    .control:disabled,
    .control:active {
      outline: none;
    }

    :host(:focus-within) .control {
      border-color: ${accentFillFocus};
      box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px)
        ${accentFillFocus};
    }

    :host([appearance='filled']) .control {
      background: ${neutralFillRest};
    }

    :host([appearance='filled']:hover:not([disabled])) .control {
      background: ${neutralFillHover};
    }

    :host([resize='both']) .control {
      resize: both;
    }

    :host([resize='horizontal']) .control {
      resize: horizontal;
    }

    :host([resize='vertical']) .control {
      resize: vertical;
    }

    .label {
      display: block;
      color: ${neutralForegroundRest};
      cursor: pointer;
      font-size: ${typeRampBaseFontSize};
      line-height: ${typeRampBaseLineHeight};
      margin-bottom: 4px;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
      cursor: ${disabledCursor};
    }
    :host([disabled]) {
      opacity: ${disabledOpacity};
    }
    :host([disabled]) .control {
      border-color: ${neutralStrokeRest};
    }
  `.withBehaviors(
    forcedColorsStylesheetBehavior(css`
      :host([disabled]) {
        opacity: 1;
      }
    `)
  );
