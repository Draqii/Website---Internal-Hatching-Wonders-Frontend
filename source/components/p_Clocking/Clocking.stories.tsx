import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Clocking from './Clocking';

// Component Story
const meta: Meta<typeof Clocking> = {
  title: "Unsorted/Clocking",
  component: Clocking,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {

  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: "radio",
      options: ["light", "dark"],
      description: "optional theme"
    },
    className: {
      control: "text",
      description: "optional className"
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof Clocking>;


// ++++++++++++++++++++++++++++++++++++
// Story Variants 

export const Primary: Story = {
  args: {
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};