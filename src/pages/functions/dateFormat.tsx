// post.publishedAtをスラッシュ区切りの日付に変換
export default function dateFormat(date: string) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  return `${year}/${month}/${day}`;
}
