import type { Meta, StoryObj } from '@storybook/react';
import MainLayout from '../MainLayout';

const meta = {
  title: 'Layouts/MainLayout',
  component: MainLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div style={{ padding: '2rem' }}>Main Layout Content</div>,
  },
  parameters: {
    docs: {
      description: {
        story: 'The default state of the MainLayout component with an authenticated user.',
      },
    },
  },
};

export const WithDifferentContent: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2>Custom Content</h2>
        <p>This demonstrates the MainLayout with different child content.</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button style={{ padding: '0.5rem 1rem', background: '#0066cc', color: 'white', border: 'none', borderRadius: '4px' }}>
            Action Button
          </button>
          <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid #ccc', borderRadius: '4px' }}>
            Secondary Action
          </button>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'MainLayout with custom content to demonstrate how it wraps different UI elements.',
      },
    },
  },
};
