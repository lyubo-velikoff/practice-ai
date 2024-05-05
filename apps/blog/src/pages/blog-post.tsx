import { useParams } from 'react-router-dom';
import { BlogPost } from './types'; // Assuming you have a BlogPost type defined

interface BlogPostProps {
  posts: BlogPost[]; // The list of all blog posts
}

const BlogPostPage: React.FC<BlogPostProps> = ({ posts }) => {
  const { postId } = useParams<{ postId: string }>(); // Get the postId from the route
  const post = posts.find((p) => p.id === parseInt(postId, 10)); // Find the specific post

  if (!post) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold text-red-600">Post Not Found</h1> {/* Error message if post not found */}
        <p className="text-gray-600">The post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1> {/* Post title */}
      <p className="text-gray-600">Published on {post.date} by {post.author}</p> {/* Post metadata */}
      <p className="mt-4">{post.content}</p> {/* Post content */}
    </div>
  );
};

export default BlogPostPage;
