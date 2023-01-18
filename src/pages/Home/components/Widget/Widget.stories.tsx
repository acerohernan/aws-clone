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
    children: (
      <div>
        <WidgetSection>Section 1</WidgetSection>
        <WidgetSection>Section 2</WidgetSection>
      </div>
    ),
  },
};
