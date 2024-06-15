import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { User } from '@interfaces/user';
import { Skeleton } from '@components/shared/Skeleton';
import { UserList } from './components/UserList';
import { UnravelButton } from './components/UnravelButton';
import { UserSearchbar } from './components/UserSearchbar';
import { LandingPage } from '.';

const mockUsers: User[] = [
  {
    id: 1,
    login: 'John Doe',
    avatar_url: 'src/assets/incognito.webp',
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
    id: 1,
    login: 'John Doe',
    avatar_url: 'src/assets/incognito.webp',
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
    id: 1,
    login: 'John Doe',
    avatar_url: 'src/assets/incognito.webp',
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
    id: 1,
    login: 'John Doe',
    avatar_url: 'src/assets/incognito.webp',
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
];

const meta: Meta<typeof LandingPage> = {
  title: 'LandingPage',
  component: LandingPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  render: () => (
    <>
      <UnravelButton setTriggerUserDetails={() => {}} />
      <UserSearchbar setUsers={() => {}} users={mockUsers} setButtonTrigger={() => {}} />
      <UserList triggerUserDetails={true} users={mockUsers} />
      <Skeleton />
    </>
  ),
};

export const Loading: Story = {
  render: () => <Skeleton />,
};