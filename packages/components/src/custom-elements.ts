// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { Container } from '@microsoft/fast-foundation';
import { jpButton } from './button/index';

// Don't delete these. They're needed so that API-extractor doesn't add import types
// with improper pathing
/* eslint-disable @typescript-eslint/no-unused-vars */
// import type { Button } from './button/index';

// export all components
export { jpButton };

/**
 * All Jupyter Web Components
 * @public
 * @remarks
 * This object can be passed directly to the Design System's `register` method to
 * statically link and register all available components.
 */
export const allComponents = {
  jpButton,
  register(container?: Container, ...rest: any[]): void {
    if (!container) {
      // preserve backward compatibility with code that loops through
      // the values of this object and calls them as funcs with no args
      return;
    }

    for (const key in this) {
      if (key === 'register') {
        continue;
      }

      (this as any)[key]().register(container, ...rest);
    }
  }
};
