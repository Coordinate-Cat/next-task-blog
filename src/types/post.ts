import Category from './category';

export interface Post {
  thumbnail: any;
  id: string;
  title: string;
  publishedAt: string;
  category: Array<Category>;
  description: string;
  body: string;
}
