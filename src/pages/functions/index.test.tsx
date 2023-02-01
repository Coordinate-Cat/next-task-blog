import { Post } from '@/types/post';
import dateFormat from './dateFormat';

const post: Post = {
  id: '1',
  title: 'dummytitle',
  body: 'dummyBody',
  publishedAt: '2023-01-01T00:00:00+09:00',
  category: [
    {
      id: '1',
      name: 'dummyCategory',
      createdAt: '2023-01-01T00:00:00+09:00',
      updatedAt: '2023-01-01T00:00:00+09:00',
      publishedAt: '2023-01-01T00:00:00+09:00',
      revisedAt: '2023-01-01T00:00:00+09:00',
    },
  ],
  thumbnail: {
    url: 'dummyUrl',
    height: 300,
    width: 150,
  },
  description: '',
};

describe('dateFormat関数のテスト', () => {
  it('post.publishedAtがスラッシュ区切りの日付', () => {
    expect(dateFormat(post.publishedAt)).toBe('2023/1/1');
  });
  it('post.publishedAtがスラッシュ区切り以外の日付', () => {
    expect(dateFormat(post.publishedAt)).not.toBe('2023-1-1');
  });
});
