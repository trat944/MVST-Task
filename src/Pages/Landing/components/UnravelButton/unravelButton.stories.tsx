import type { Meta, StoryObj } from '@storybook/react';
import { UnravelButton } from '.';


const meta: Meta<typeof UnravelButton> = {
  title: 'LandingPage/UnravelButton',
  component: UnravelButton,
};

export default meta;
type Story = StoryObj<typeof UnravelButton>;

export const Default: Story = {};