import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { UserSearchbar } from '.';

const meta: Meta<typeof UserSearchbar> = {
  title: 'LandingPage/UserSearchbar',
  component: UserSearchbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    setUsers: { action: 'setUsers' },
    setButtonTrigger: { action: 'setButtonTrigger' },
  },
};

export default meta;
type Story = StoryObj<typeof UserSearchbar>;

export const Default: Story = {
  args: {
    users: [],
  },
};