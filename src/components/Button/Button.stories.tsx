import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const IconStart: Story = {
  args: {
    variant: 'primary',
    iconStart: 'plus',
    children: 'Button',
  },
};

export const IconEnd: Story = {
  args: {
    variant: 'primary',
    iconEnd: 'xmark',
    children: 'Button',
  },
};
