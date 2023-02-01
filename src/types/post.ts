import Category from './category';

export interface Post {
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  id: string;
  title: string;
  publishedAt: string;
  category: Array<Category>;
  description: string;
  body: string;
}
