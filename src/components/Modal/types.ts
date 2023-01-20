import React from 'react';

export interface IModalContext {
  isOpen: boolean;
  modalNode: React.ReactNode;
  setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  onPresent: (node: React.ReactNode, closeInOverlayClick: boolean) => void;
  onDismiss: () => void;
}

export interface ModalInheritProps {
  onDismiss?: () => void;
}
