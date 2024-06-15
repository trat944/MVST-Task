import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { UserList } from '.';
import { User } from '@interfaces/user';

const mockUsers: User[] = [
  {
    id: 1,
    login: 'John Doe',
    avatar_url: 'src/assets/incognitov.webp',
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
  },
  {
    id: 2,
    login: 'Jane Doe',
    avatar_url: 'src/assets/incognitov.webp',
    events_url: 'https://example.com/events2',
    followers_url: 'https://example.com/followers2',
    following_url: 'https://example.com/following2',
    gists_url: 'https://example.com/gists2',
    gravatar_id: '',
    html_url: 'https://example.com/html2',
    node_id: 'node2',
    organizations_url: 'https://example.com/organizations2',
    received_events_url: 'https://example.com/received_events2',
    repos_url: 'https://example.com/repos2',
    site_admin: false,
    starred_url: 'https://example.com/starred2',
    subscriptions_url: 'https://example.com/subscriptions2',
    type: 'User',
    url: 'https://example.com/url2',
  },
  {
    id: 3,
    login: 'Jane wd',
    avatar_url: 'src/assets/incognitov.webp',
    events_url: 'https://example.com/events2',
    followers_url: 'https://example.com/followers2',
    following_url: 'https://example.com/following2',
    gists_url: 'https://example.com/gists2',
    gravatar_id: '',
    html_url: 'https://example.com/html2',
    node_id: 'node2',
    organizations_url: 'https://example.com/organizations2',
    received_events_url: 'https://example.com/received_events2',
    repos_url: 'https://example.com/repos2',
    site_admin: false,
    starred_url: 'https://example.com/starred2',
    subscriptions_url: 'https://example.com/subscriptions2',
    type: 'User',
    url: 'https://example.com/url2',
  },
  {
    id: 4,
    login: 'Jane tt',
    avatar_url: 'src/assets/incognitov.webp',
    events_url: 'https://example.com/events2',
    followers_url: 'https://example.com/followers2',
    following_url: 'https://example.com/following2',
    gists_url: 'https://example.com/gists2',
    gravatar_id: '',
    html_url: 'https://example.com/html2',
    node_id: 'node2',
    organizations_url: 'https://example.com/organizations2',
    received_events_url: 'https://example.com/received_events2',
    repos_url: 'https://example.com/repos2',
    site_admin: false,
    starred_url: 'https://example.com/starred2',
    subscriptions_url: 'https://example.com/subscriptions2',
    type: 'User',
    url: 'https://example.com/url2',
  },
];

const meta: Meta<typeof UserList> = {
  title: 'LandingPage/UserList',
  component: UserList,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UserList>;

export const Default: Story = {
  args: {
    users: mockUsers,
    triggerUserDetails: false,
  },
};
