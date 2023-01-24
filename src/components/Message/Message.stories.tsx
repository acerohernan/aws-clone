import { Meta, StoryObj } from '@storybook/react';
import Message from './Message';

const meta = {
  title: 'Atoms/Message',
  component: Message,
  tags: ['autodocs'],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Information: Story = {
  args: {
    children: <p className="text-sm">This is a message default</p>,
  },
};
