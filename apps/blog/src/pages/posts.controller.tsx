import React, { useDeferredValue, useState } from 'react';
import { ARTICLE_API_URL } from '../constants/constants';
import { fetcher } from '@practice-ai/db';
import useSWR from 'swr';
import Posts from './posts';
import { BlogPost } from '../types';

const PostsController: React.FC = () => {
  const [tag, setTag] = useState('');
  const [username, setUsername] = useState('');
  const [minReactions, setMinReactions] = useState(0);
  console.log('minReactions', minReactions);
  const deferredTag = useDeferredValue(tag);
  const deferredUsername = useDeferredValue(username);
  const deferredMinReactions = useDeferredValue(minReactions);

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

  const filterProps = {
    tag,
    setTag,
    username,
    setUsername,
    minReactions,
    setMinReactions,
  };

  const filteredPosts = posts
    ? posts.filter((post: BlogPost) => {
        const tagMatch = deferredTag ? post.tag_list.includes(tag) : true;
        const userMatch = deferredUsername
          ? post.user.username === username
          : true;
        const reactionsMatch = Number.isNaN(deferredMinReactions)
          ? true
          : post.public_reactions_count >= deferredMinReactions;
        return tagMatch && userMatch && reactionsMatch;
      })
    : [];

  return <Posts posts={filteredPosts} {...filterProps} />;
};

export default PostsController;
