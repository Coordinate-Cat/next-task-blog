export interface Category {
  map(arg0: (category: any) => JSX.Element): import('react').ReactNode;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}
