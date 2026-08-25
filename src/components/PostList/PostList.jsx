import { PostInfo } from '../PostInfo';
import './PostList.scss';

const MakePostInfo = posts =>
  posts.map(post => <PostInfo post={post} key={post.id} />);

export const PostList = ({ posts }) => (
  <div className="PostList">{MakePostInfo(posts)}</div>
);
