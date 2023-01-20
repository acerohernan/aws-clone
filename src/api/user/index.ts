import { widgets } from './data.json';
import { Widget } from './types';

export const getAllWidgets: Promise<Array<Widget>> = new Promise((resolve) =>
  setTimeout(() => resolve(widgets as Array<Widget>), 500)
);
