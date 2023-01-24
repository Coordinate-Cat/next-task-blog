import Category from './category';

export interface Post {
  thumbnail: any;
  id: string;
  title: string;
  publishedAt: string;
  category: Category;
  description: string;
  body: string;
}
