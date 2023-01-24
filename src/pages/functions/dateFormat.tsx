import { Post } from '../../types/post';

// post.publishedAtをスラッシュ区切りの日付に変換
export default function dateFormat(post: Post) {
  const date = new Date(post.publishedAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  post.publishedAt = `${year}/${month}/${day}`;
}
