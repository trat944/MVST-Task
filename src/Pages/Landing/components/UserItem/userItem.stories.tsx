import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { UserItem } from '.';
import { User } from '@interfaces/user';

const mockUser: User = {
  id: 1,
  login: 'John Doe',
  avatar_url: 'src/assets/logo.png',
  events_url: 'https://example.com/events1',
  followers_url: 'https://example.com/followers1',
  following_url: 'https://example.com/following1',
  gists_url: 'https://example.com/gists1',
  gravatar_id: '',
  html_url: 'https://example.com/html1',
  node_id: 'node1',
  organizations_url: 'https://example.com/organizations1',
  received_events_url: 'https://example.com/received_events1',
  repos_url: 'https://example.com/repos1',
  site_admin: false,
  starred_url: 'https://example.com/starred1',
  subscriptions_url: 'https://example.com/subscriptions1',
  type: 'User',
  url: 'https://example.com/url1',
};

const meta: Meta<typeof UserItem> = {
  title: 'LandingPage/UserItem',
  component: UserItem,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UserItem>;

export const Default: Story = {
  args: {
    user: mockUser,
    triggerUserDetails: true,
  },
};

export const WithTriggerInactive: Story = {
  args: {
    user: mockUser,
    triggerUserDetails: false,
  },
};
