import type { Meta, StoryObj } from '@storybook/react';
import Card from '../Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Card Content',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
    children: 'Card Content',
  },
};

export const WithFooter: Story = {
  args: {
    children: 'Card Content',
    footer: <div>Card Footer</div>,
  },
};

export const WithTitleAndFooter: Story = {
  args: {
    title: 'Card Title',
    children: 'Card Content',
    footer: <div>Card Footer</div>,
  },
};
