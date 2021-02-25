import { useEffect, useMemo } from 'react';

export function usePortal(id: string): HTMLDivElement {
  const portal = useMemo((): HTMLDivElement => {
    let tryPortal = document.querySelector(`[data-${id}-portal]`) as HTMLDivElement;

    if (!tryPortal) {
      const nextPortal = document.createElement('div');
      nextPortal.setAttribute(`data-${id}-portal`, '');

      tryPortal = nextPortal;
    }

    return tryPortal;
  }, []);

  useEffect((): VoidFunction => {
    document.body.insertAdjacentElement('beforeend', portal);

    return (): void => {
      document.body.removeChild(portal);
      portal.remove();
    };
  }, []);

  return portal;
}
