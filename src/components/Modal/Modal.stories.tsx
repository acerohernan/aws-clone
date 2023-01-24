import { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta = {
  title: 'Molecules/Modal',
  tags: ['autodocs'],
  component: Modal,
} satisfies Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Modal Example',
    children: (
      <p className="text-sm text-black-secondary">This is an example text</p>
    ),
  },
};
