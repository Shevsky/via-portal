# Wrap components to portal

## Example

```typescript jsx
import { viaPortal } from '@shevsky/via-portal';
import React, { PropsWithChildren } from 'react';

type TFooProps = PropsWithChildren<{}>;

export const Foo = viaPortal((props: TFooProps): JSX.Element => {
  return (
    <div className="foo">
      {props.children}
    </div>
  );
}, 'foo'); // Would be rendered to <div data-foo-portal/> at the end of <body/>
```