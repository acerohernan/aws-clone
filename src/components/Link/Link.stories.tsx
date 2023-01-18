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
    size: 'sm',
  },
};

/* export const AllSizes = () => {
  <div className="border w-10 h-10">
    <Link size="xs">Link</Link>
    <Link size="sm">Link</Link>
    <Link size="md">Link</Link>
  </div>;
};
 */
