import React from 'react';
import { ARTICLE_API_URL } from '../constants/constants';
import { fetcher } from '@practice-ai/db';
import useSWR from 'swr';
import Posts from './posts';

export interface FiltersProps {
  tag?: string;
  username?: string;
  minReactions?: number;
  setTag: (e: string) => void;
  setUsername: (e: string) => void;
  setMinReactions: (e: number) => void;
}

const Filters: React.FC<FiltersProps> = ({
  tag,
  setTag,
  username,
  setUsername,
  minReactions,
  setMinReactions,
}) => {
  return (
    <div className="items-center justify-center gap-4 mb-4 md:flex">
      <div>
        <label className="block text-sm font-medium">Tag:</label>
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full p-2 border"
          placeholder="Enter tag to filter"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border"
          placeholder="Enter username to filter"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Min. Reactions:</label>
        <input
          type="number"
          value={minReactions}
          onChange={(e) => setMinReactions(parseInt(e.target.value))}
          className="w-full p-2 border"
          placeholder="Enter min reactions"
        />
      </div>
    </div>
  );
};

export default Filters;
