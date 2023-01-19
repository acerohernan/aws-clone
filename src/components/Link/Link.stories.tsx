import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Link',
  },
};

export const AllSizes = () => {
  return (
    <div className="w-14 h-14 flex flex-col">
      <Link size="xs">Link</Link>
      <Link size="sm">Link</Link>
      <Link size="md">Link</Link>
    </div>
  );
};
