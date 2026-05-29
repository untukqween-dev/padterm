export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  email: string | null;
  bio: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  public_repos: number;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  owner: {
    login: string;
    avatar_url: string;
  };
  private: boolean;
  url: string;
  html_url: string;
  default_branch: string;
  language: string | null;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  pushed_at: string;
  created_at: string;
  updated_at: string;
}

export interface GitHubCodespace {
  id: string;
  name: string;
  state: 'Available' | 'In Progress' | 'Failed';
  display_name?: string;
  owner: {
    login: string;
  };
  repository: GitHubRepository;
  machine: {
    name: string;
    display_name: string;
  };
  prebuild?: {
    state: string;
    start_time: string;
    completion_time?: string;
  };
  devcontainer_path?: string;
  created_at: string;
  updated_at: string;
  last_used_at: string;
  web_url?: string;
  machines_url?: string;
  start_url?: string;
  stop_url?: string;
  delete_url?: string;
  publish_url?: string;
}

export interface GitHubToken {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in?: number;
}
