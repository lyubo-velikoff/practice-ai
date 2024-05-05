// __tests__/Home.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './home';
import { BlogPost } from '../types';

const mockPosts: BlogPost[] = [
  {
    type_of: 'article',
    id: 1,
    title: 'First Post',
    description: 'This is the first post',
    readable_publish_date: 'Jan 1, 2024',
    slug: 'first-post',
    path: '/posts/1',
    url: 'https://dev.to/posts/1',
    comments_count: 0,
    public_reactions_count: 0,
    collection_id: null,
    published_timestamp: '2024-01-01T00:00:00Z',
    positive_reactions_count: 0,
    cover_image: null,
    social_image: '',
    canonical_url: '',
    created_at: '',
    edited_at: null,
    crossposted_at: null,
    published_at: '2024-01-01T00:00:00Z',
    last_comment_at: '',
    reading_time_minutes: 1,
    tag_list: 'test, example',
    body_html: '',
    body_markdown: '',
    user: {
      name: 'John Doe',
      username: 'johndoe',
      twitter_username: '',
      github_username: '',
      user_id: 1,
      website_url: '',
      profile_image: '',
      profile_image_90: '',
    },
    organization: null,
    flare_tag: {
      name: 'example',
      bg_color_hex: '#000000',
      text_color_hex: '#FFFFFF',
    },
  },
];

test('renders Home with blog posts', () => {
  render(
    <Router>
      <Home posts={mockPosts} />
    </Router>
  );

  // Check if the first post is rendered with the correct title
  screen.getByText('First Post');

  // Check if the first post description is rendered
  screen.getByText('This is the first post');
});
