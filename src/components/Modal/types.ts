export interface IModalContext {
  state: IModalContextState;
  actions: IModalContextActions;
}
export interface IModalContextState {}
export interface IModalContextActions {
  openModal: () => void;
  closeModal: () => void;
}
