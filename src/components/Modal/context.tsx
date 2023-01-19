import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Modal from './Modal';
import {
  IModalContext,
  IModalContextActions,
  IModalContextState,
} from './types';

const ModalContext = React.createContext({} as IModalContext);

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const state: IModalContextState = {};
  const actions: IModalContextActions = { openModal, closeModal };
  const contextValue = useMemo(() => {
    return { state, actions };
  }, [state, actions]);

  return (
    <ModalContext.Provider value={contextValue}>
      {open ? (
        <div className="fixed z-10 top-0 bottom-0 right-0 left-0 h-screen bg-modal-open-background flex items-center justify-center">
          <Modal closeModal={closeModal} />
        </div>
      ) : null}
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => React.useContext(ModalContext);
