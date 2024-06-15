import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { RepoHeader } from '.';

const mockRepos = [
  {
    allow_forking: true,
    archive_url: "https://api.github.com/repos/wycats/abbot-from-scratch/{archive_format}{/ref}",
    archived: false,
    assignees_url: "https://api.github.com/repos/wycats/abbot-from-scratch/assignees{/user}",
    blobs_url: "https://api.github.com/repos/wycats/abbot-from-scratch/git/blobs{/sha}",
    branches_url: "https://api.github.com/repos/wycats/abbot-from-scratch/branches{/branch}",
    clone_url: "https://github.com/wycats/abbot-from-scratch.git",
    collaborators_url: "https://api.github.com/repos/wycats/abbot-from-scratch/collaborators{/collaborator}",
    comments_url: "https://api.github.com/repos/wycats/abbot-from-scratch/comments{/number}",
    commits_url: "https://api.github.com/repos/wycats/abbot-from-scratch/commits{/sha}",
    compare_url: "https://api.github.com/repos/wycats/abbot-from-scratch/compare/{base}...{head}",
    contents_url: "https://api.github.com/repos/wycats/abbot-from-scratch/contents/{+path}",
    contributors_url: "https://api.github.com/repos/wycats/abbot-from-scratch/contributors",
    created_at: new Date("2010-11-28T17:49:44Z"),
    default_branch: "master",
    deployments_url: "https://api.github.com/repos/wycats/abbot-from-scratch/deployments",
    description: null,
    disabled: false,
    downloads_url: "https://api.github.com/repos/wycats/abbot-from-scratch/downloads",
    events_url: "https://api.github.com/repos/wycats/abbot-from-scratch/events",
    fork: false,
    forks: 5,
    forks_count: 5,
    forks_url: "https://api.github.com/repos/wycats/abbot-from-scratch/forks",
    full_name: "wycats/abbot-from-scratch",
    git_commits_url: "https://api.github.com/repos/wycats/abbot-from-scratch/git/commits{/sha}",
    git_refs_url: "https://api.github.com/repos/wycats/abbot-from-scratch/git/refs{/sha}",
    git_tags_url: "https://api.github.com/repos/wycats/abbot-from-scratch/git/tags{/sha}",
    git_url: "git://github.com/wycats/abbot-from-scratch.git",
    has_discussions: false,
    has_downloads: true,
    has_issues: true,
    has_pages: false,
    has_projects: true,
    has_wiki: true,
    homepage: null,
    hooks_url: "https://api.github.com/repos/wycats/abbot-from-scratch/hooks",
    html_url: "https://github.com/wycats/abbot-from-scratch",
    id: 1119731,
    is_template: false,
    issue_comment_url: "https://api.github.com/repos/wycats/abbot-from-scratch/issues/comments{/number}",
    issue_events_url: "https://api.github.com/repos/wycats/abbot-from-scratch/issues/events{/number}",
    issues_url: "https://api.github.com/repos/wycats/abbot-from-scratch/issues{/number}",
    keys_url: "https://api.github.com/repos/wycats/abbot-from-scratch/keys{/key_id}",
    labels_url: "https://api.github.com/repos/wycats/abbot-from-scratch/labels{/name}",
    language: "Ruby",
    languages_url: "https://api.github.com/repos/wycats/abbot-from-scratch/languages",
    license: null,
    merges_url: "https://api.github.com/repos/wycats/abbot-from-scratch/merges",
    milestones_url: "https://api.github.com/repos/wycats/abbot-from-scratch/milestones{/number}",
    mirror_url: null,
    name: "abbot-from-scratch",
    node_id: "MDEwOlJlcG9zaXRvcnkxMTE5NzMx",
    notifications_url: "https://api.github.com/repos/wycats/abbot-from-scratch/notifications{?since,all,participating}",
    open_issues: 1,
    open_issues_count: 1,
    owner: {
      login: 'wycats',
      id: 4,
      node_id: 'MDQ6VXNlcjQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
      gravatar_id: '',
      html_url: 'https://github.com/wycats',
      type: 'User',
      site_admin: false,
    },
    private: false,
    pulls_url: "https://api.github.com/repos/wycats/abbot-from-scratch/pulls{/number}",
    pushed_at: new Date("2012-01-27T19:53:46Z"),
    releases_url: "https://api.github.com/repos/wycats/abbot-from-scratch/releases{/id}",
    size: 213,
    ssh_url: "git@github.com:wycats/abbot-from-scratch.git",
    stargazers_count: 9,
    stargazers_url: "https://api.github.com/repos/wycats/abbot-from-scratch/stargazers",
    statuses_url: "https://api.github.com/repos/wycats/abbot-from-scratch/statuses/{sha}",
    subscribers_url: "https://api.github.com/repos/wycats/abbot-from-scratch/subscribers",
    subscription_url: "https://api.github.com/repos/wycats/abbot-from-scratch/subscription",
    svn_url: "https://github.com/wycats/abbot-from-scratch",
    tags_url: "https://api.github.com/repos/wycats/abbot-from-scratch/tags",
    teams_url: "https://api.github.com/repos/wycats/abbot-from-scratch/teams",
    topics: [],
    trees_url: "https://api.github.com/repos/wycats/abbot-from-scratch/git/trees{/sha}",
    updated_at: new Date("2024-04-02T17:40:56Z"),
    url: "https://api.github.com/repos/wycats/abbot-from-scratch",
    visibility: "public",
    watchers: 9,
    watchers_count: 9,
    web_commit_signoff_required: false,
  }
]

const meta: Meta<typeof RepoHeader> = {
  title: 'UserRepositories/RepositoryContainer/RepoHeader',
  component: RepoHeader,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RepoHeader>;

export const Default: Story = {
  args: {
    repos: mockRepos,
  },
};
