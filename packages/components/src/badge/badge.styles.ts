// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.
import { css, ElementStyles } from '@microsoft/fast-element';
import { display, FoundationElementTemplate } from '@microsoft/fast-foundation';
import {
  bodyFont,
  controlCornerRadius,
  designUnit,
  neutralFillRest,
  neutralForegroundRest,
  strokeWidth,
  typeRampMinus1FontSize,
  typeRampMinus1LineHeight
} from '../design-tokens';
import { heightNumber } from '../styles/index';

/**
 * Styles for Badge
 * @public
 */
export const badgeStyles: FoundationElementTemplate<ElementStyles> = (
  context,
  definition
) => css`
  ${display('inline-block')} :host {
    box-sizing: border-box;
    font-family: ${bodyFont};
    font-size: ${typeRampMinus1FontSize};
    line-height: ${typeRampMinus1LineHeight};
  }

  .control {
    border-radius: calc(${controlCornerRadius} * 1px);
    padding: calc(((${designUnit} * 0.5) - ${strokeWidth}) * 1px)
      calc((${designUnit} - ${strokeWidth}) * 1px);
    color: ${neutralForegroundRest};
    font-weight: 600;
    border: calc(${strokeWidth} * 1px) solid transparent;
    background-color: ${neutralFillRest};
  }

  .control[style] {
    font-weight: 400;
  }

  :host([circular]) .control {
    border-radius: 100px;
    padding: 0 calc(${designUnit} * 1px);
    /* Need to work with Brian on width and height here */
    height: calc((${heightNumber} - (${designUnit} * 3)) * 1px);
    min-width: calc((${heightNumber} - (${designUnit} * 3)) * 1px);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
`;
