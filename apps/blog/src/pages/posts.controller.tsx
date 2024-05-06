import React from 'react';
import { ARTICLE_API_URL } from '../constants/constants';
import { fetcher } from '@practice-ai/db';
import useSWR from 'swr';
import Posts from './posts';

const PostsController: React.FC = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(`${ARTICLE_API_URL}/articles`, fetcher);

  if (isLoading) {
    return <p>Loading blog posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return <Posts posts={posts} />;
};

export default PostsController;
