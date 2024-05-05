export type BlogPost = {
  type_of: string; // Type of content (e.g., 'article')
  id: number; // ID of the article
  title: string; // Title of the article
  description: string; // Description of the article
  readable_publish_date: string; // Human-readable publish date
  slug: string; // Slug for the article
  path: string; // Path to the article on the platform
  url: string; // Full URL to the article
  comments_count: number; // Number of comments
  public_reactions_count: number; // Number of public reactions
  collection_id: number | null; // Collection ID if the article is part of a collection
  published_timestamp: string; // Timestamp of publication
  positive_reactions_count: number; // Number of positive reactions
  cover_image: string | null; // Cover image URL (can be null)
  social_image: string; // Social media image URL
  canonical_url: string; // Canonical URL of the article
  created_at: string; // Creation timestamp
  edited_at: string | null; // Edited timestamp (can be null)
  crossposted_at: string | null; // Crossposted timestamp (can be null)
  published_at: string; // Published timestamp
  last_comment_at: string; // Timestamp of the last comment
  reading_time_minutes: number; // Estimated reading time in minutes
  tag_list: string | string[]; // Tags (can be a single string or an array)
  body_html: string; // HTML version of the article body
  body_markdown: string; // Markdown version of the article body
  user: {
    name: string; // User's name
    username: string; // User's username
    twitter_username: string | null; // User's Twitter handle (can be null)
    github_username: string | null; // User's GitHub username (can be null)
    user_id: number; // User ID
    website_url: string; // User's website URL
    profile_image: string; // URL to the user's profile image
    profile_image_90: string; // 90x90 version of the user's profile image
  };
  organization: {
    name: string; // Organization's name
    username: string; // Organization's username
    slug: string; // Organization's slug
    profile_image: string; // Organization's profile image
    profile_image_90: string; // 90x90 version of the organization's profile image
  } | null; // Organization can be null if not applicable
  flare_tag: {
    name: string; // Name of the flare tag
    bg_color_hex: string; // Background color (hex)
    text_color_hex: string; // Text color (hex)
  };
};
