import { Meta } from '@storybook/react';
import Icon, { iconMap, IconType } from './Icon';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;

export const Default = () => {
  return (
    <div className="flex gap-2 items-center">
      {Object.keys(iconMap).map((key, index) => {
        return (
          <Icon
            type={key as IconType}
            key={index}
            className="stroke-black-primary"
          />
        );
      })}
    </div>
  );
};
