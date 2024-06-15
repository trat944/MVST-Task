import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { UserSpecificItem } from '.';
import { UserSpecific } from '@interfaces/userSpecific';

const mockUserSpecific: UserSpecific = {
  id: 4,
  login: 'wycats',
  avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
  bio: null,
  blog: 'http://yehudakatz.com',
  company: '@tildeio',
  created_at: '2008-01-12T05:38:33Z',
  email: null,
  events_url: 'https://api.github.com/users/wycats/events{/privacy}',
  followers: 10198,
  followers_url: 'https://api.github.com/users/wycats/followers',
  following: 13,
  following_url: 'https://api.github.com/users/wycats/following{/other_user}',
  gists_url: 'https://api.github.com/users/wycats/gists{/gist_id}',
  gravatar_id: '',
  hireable: null,
  html_url: 'https://github.com/wycats',
  location: 'Portland, OR',
  name: 'Yehuda Katz',
  node_id: 'MDQ6VXNlcjQ=',
  organizations_url: 'https://api.github.com/users/wycats/orgs',
  public_gists: 763,
  public_repos: 293,
  received_events_url: 'https://api.github.com/users/wycats/received_events',
  repos_url: 'https://api.github.com/users/wycats/repos',
  site_admin: false,
  starred_url: 'https://api.github.com/users/wycats/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/wycats/subscriptions',
  twitter_username: 'wycats',
  type: 'User',
  updated_at: '2024-06-07T22:52:45Z',
  url: 'https://api.github.com/users/wycats',
};

const meta: Meta<typeof UserSpecificItem> = {
  title: 'UserRepositories/ProfileInfoContainer/UserSpecificItem',
  component: UserSpecificItem,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UserSpecificItem>;

export const Default: Story = {
  args: {
    user: mockUserSpecific,
  },
};