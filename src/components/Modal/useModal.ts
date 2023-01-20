import React, { useCallback, useContext } from 'react';
import ModalContext from './context';

type Handler = () => void;

export default function useModal(
  modal: React.ReactNode,
  closeOnOverlayClick = true
): { onPresent: Handler; onDismiss: Handler } {
  const { onPresent, onDismiss } = useContext(ModalContext);

  const onPresentCallback = useCallback(() => {
    onPresent(modal, closeOnOverlayClick);
  }, [modal, closeOnOverlayClick, onPresent]);

  return { onPresent: onPresentCallback, onDismiss };
}
