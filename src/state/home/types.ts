export interface HomeState {
  widgetsMap: Record<string, Widget>;
}

export interface Widget {
  id: string;
  title: string;
  infoLink: boolean;
  footer: string | null;
  big: boolean;
  isAdded: boolean;
}
