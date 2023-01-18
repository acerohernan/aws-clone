import { Meta } from '@storybook/react';
import Icon from './Icon';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
//type Story = StoryObj<typeof meta>;

export const Default = () => {
  return (
    <div className="flex gap-2 items-center">
      <Icon type="plus" className="stroke-black-primary" />
      <Icon type="xmark" className="stroke-black-primary" />
      <Icon type="drag" className="stroke-black-primary" />
      <Icon type="threedots" className="stroke-black-primary" />
    </div>
  );
};
