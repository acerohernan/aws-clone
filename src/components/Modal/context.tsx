import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IModalContext, ModalInheritProps } from './types';

const ModalContext = React.createContext<IModalContext>({
  isOpen: false,
  modalNode: null,
  setModalNode: () => null,
  onPresent: () => null,
  onDismiss: () => null,
});

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

  const handlePresent = (
    node: React.ReactNode,
    closeInOverlayClick: boolean
  ) => {
    setModalNode(node);
    setIsOpen(true);
    setCloseOnOverlayClick(closeInOverlayClick);
  };
  const handleDismiss = useCallback(() => {
    setModalNode(undefined);
    setIsOpen(false);
    setCloseOnOverlayClick(true);
  }, []);

  const handleDismissInOverlayClick = () => {
    if (closeOnOverlayClick) {
      handleDismiss();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const value = useMemo<IModalContext>(() => {
    return {
      isOpen,
      modalNode,
      onDismiss: handleDismiss,
      onPresent: handlePresent,
      setModalNode,
    };
  }, []);

  return (
    <ModalContext.Provider value={value}>
      {isOpen ? (
        <div className="fixed w-screen h-screen flex items-center justify-center px-2 z-20">
          <div
            className="fixed z-20 top-0 bottom-0 right-0 left-0 h-screen bg-modal-open-background"
            onClick={handleDismissInOverlayClick}
            onKeyDown={handleDismissInOverlayClick}
          />
          {React.isValidElement(modalNode) &&
            React.cloneElement(modalNode, {
              onDismiss: handleDismiss,
            } as ModalInheritProps)}
        </div>
      ) : null}
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => React.useContext(ModalContext);
export default ModalContext;
