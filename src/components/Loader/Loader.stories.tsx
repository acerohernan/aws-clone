import { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta = {
  title: 'Atoms/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
