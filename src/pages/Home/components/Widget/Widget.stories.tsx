import { Meta, StoryObj } from '@storybook/react';
import Widget, { WidgetSection } from './Widget';

const meta = {
  title: 'Molecules/Widget',
  component: Widget,
  tags: ['autodocs'],
} satisfies Meta<typeof Widget>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    footer: 'Footer',
    className: 'w-[386px]',
    children: (
      <div>
        <WidgetSection>
          <span className="text-sm text-black-secondary">Section 1</span>
        </WidgetSection>
        <WidgetSection>
          <span className="text-sm text-black-secondary">Section 2</span>
        </WidgetSection>
      </div>
    ),
  },
};

export const WithoutFooter: Story = {
  args: {
    title: 'Title',
    className: 'w-[386px]',
    children: (
      <div>
        <WidgetSection>
          <span className="text-sm text-black-secondary">Section 1</span>
        </WidgetSection>
        <WidgetSection>
          <span className="text-sm text-black-secondary">Section 2</span>
        </WidgetSection>
      </div>
    ),
  },
};

export const WithInfoLink: Story = {
  args: {
    title: 'Title',
    className: 'w-[386px]',
    addInfoLink: true,
    children: (
      <div>
        <WidgetSection>
          <span className="text-sm text-black-secondary">Section 1</span>
        </WidgetSection>
        <WidgetSection>
          <span className="text-sm text-black-secondary">Section 2</span>
        </WidgetSection>
      </div>
    ),
  },
};
