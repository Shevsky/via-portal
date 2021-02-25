import { ComponentType, createElement } from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from './use-portal';

export function viaPortal<P extends object>(component: ComponentType<P>, id: string): ComponentType<P> {
  const viaPortalComponent = (props: P): JSX.Element => {
    const portal = usePortal(id);

    return createPortal(createElement(component, props), portal);
  };

  viaPortalComponent.displayName = `${component.displayName ?? component.name}ViaPortal`;

  return viaPortalComponent;
}
