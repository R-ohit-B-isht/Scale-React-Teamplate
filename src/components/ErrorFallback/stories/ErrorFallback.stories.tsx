import type { Meta, StoryObj } from '@storybook/react';
import ErrorFallback from '../ErrorFallback';

const meta: Meta<typeof ErrorFallback> = {
  title: 'Components/ErrorFallback',
  component: ErrorFallback,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: new Error('Something went wrong'),
    resetErrorBoundary: () => console.log('Reset error boundary'),
  },
};
