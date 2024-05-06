import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './not-found';
import { ARTICLE_API_URL } from '../constants/constants';
import { fetcher } from '@practice-ai/db';
import useSWR from 'swr';
import Post from './post';

const PostController: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: post,
    error,
    isLoading,
  } = useSWR(`${ARTICLE_API_URL}/articles/${id}`, fetcher);

  if (isLoading) {
    return <p>Loading blog post...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!post) {
    return <NotFound />;
  }

  return <Post post={post} />;
};

export default PostController;
